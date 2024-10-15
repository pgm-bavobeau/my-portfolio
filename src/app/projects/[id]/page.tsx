import { createClient } from "../../utils/supabase/client";

export default async function ProjectById({ params }: { params: { id: string } }) {
  const { id } = params;
  const supabase = createClient();

  const { data: project, error }  = await supabase.from('projects').select('*').eq('id', id).single();

  if (error) {
    console.error('Error fetching project:', error);
  } 
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="">
      <h1 className="">Project { project.name }</h1>
      <div>
        
      </div>
    </div>
  );
}

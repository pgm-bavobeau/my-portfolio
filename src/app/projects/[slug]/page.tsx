import { createClient } from "../../utils/supabase/client";

export default async function ProjectById({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const supabase = createClient();

  const { data: project, error }  = await supabase.from('projects').select('*').eq('id', slug).single();

  if (error) {
    console.error('Error fetching project:', error);
  } 
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="">
      <h1 className="">Project { project.title }</h1>
      <div>
        
      </div>
    </div>
  );
}

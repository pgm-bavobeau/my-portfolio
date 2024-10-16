import { createClient } from "../utils/supabase/client";

export default async function Projects() {
  const supabase = createClient();

  const { data: projects, error }  = await supabase.from('projects').select('*');

  if (error) {
    console.error('Error fetching projects:', error);
  }

  return (
    <div className="">
      <h1 className="">Projects</h1>
      <div>
        {
          projects && projects.map((project) => (
            <div key={project.id}>
              <h2>{project.title}</h2>
            </div>
          ))
        }
      </div>
    </div>
  );
}

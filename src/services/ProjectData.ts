// Import tipe untuk proyek.
import { ProjectsProps } from '@/types/projects';
import { supabase } from '@/utils/supabase/client';

// Fungsi asinkron untuk mengambil data dari URL.
export async function getProjectsData(): Promise<ProjectsProps[]> {
  const { data: latest_project, error } = await supabase.from('latest_project').select('*');

  if (error) {
    console.error('Error fetching latest project data:', error);
  }

  return latest_project as ProjectsProps[];
}

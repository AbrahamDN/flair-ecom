import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skQUbyQZIDgAfBFq3KpJd5tXEQTO9GpR3QyqMv5reT8LUwKWe6qMjgMs4UJfk7vVJvWPXrg3Kjs0PBDrk7VYhYYY7MRc6zZ6EmSXh4PD8aH8R5Xpljoy9rYHI1HlEPrhAz0Cnd6OrH2SWj9ecCSWoxsp467BybbsvykhzORMp2kML06hEKcZ",
})

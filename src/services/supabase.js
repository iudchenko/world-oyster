import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://dlvrpzopevdnqqhffetg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsdnJwem9wZXZkbnFxaGZmZXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzODY2MjcsImV4cCI6MjAwODk2MjYyN30.bOnLTDMz5fybrEsLMUm12gWC7Nkdx0q2F6gFLwJm_wA"
);

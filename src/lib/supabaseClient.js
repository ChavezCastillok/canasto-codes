import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://mhbovadqtklcmcpuczah.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oYm92YWRxdGtsY21jcHVjemFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc4NzkyMzcsImV4cCI6MjAwMzQ1NTIzN30.Ovw0XNrEcLZ2UF992RcFSK9cksANUrVC8dAh5s7n8jM"
);

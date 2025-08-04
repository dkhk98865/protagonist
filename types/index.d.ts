// type User = {
//   name: string;
//   email: string;
//   image?: string;
//   accountId: string;
// };

enum Subject {
  Cinderella = "Cinderella",
  SnowWhite = "Snow White",
  Rapunzel = "Rapunzel",
  SleepingBeauty = "Sleeping Beauty",
  TheLittleMermaid = "The Little Mermaid",
  BeautyAndTheBeast = "Beauty and the Beast",
}

type Protagonists = Models.DocumentList<Models.Document> & {
  $id: string;
  name: string;
  subject: Subject;
  topic: string;
  duration: number;
  bookmarked: boolean;
};

interface CreateProtagonist {
  name: string;
  subject: string;
  topic: string;
  voice: string;
  style: string;
  duration: number;
}

interface GetAllProtagonists {
  limit?: number;
  page?: number;
  subject?: string | string[];
  topic?: string | string[];
}

interface BuildClient {
  key?: string;
  sessionToken?: string;
}

interface CreateUser {
  email: string;
  name: string;
  image?: string;
  accountId: string;
}

interface SearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

interface Avatar {
  userName: string;
  width: number;
  height: number;
  className?: string;
}


interface SavedMessage {
  role: "user" | "system" | "assistant";
  content: string;
}

interface ProtagonistComponentProps {
  companionId: string;
  subject: string;
  topic: string;
  name: string;
  userName: string;
  userImage: string;
  voice: string;
  style: string;
}
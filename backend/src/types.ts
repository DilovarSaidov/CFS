// Types for executives
export type ExecutivesTypes = {
  id: string;
  name: string;
  jobTitle: string;
  photo: string;
};

export type ExecutiveType = {
  id: string;
  name: string;
  jobTitle: string;
  data: string;
  nationality: string;
  placeOfStudy: string;
  previousWork: string;
  secondPreviousWork: string;
  thirdPreviousWork: string;
  appointmentDay: string;
  status: string;
  photo: string;
};

// Types for committees
export type CommitteesType = {
  id: number;
  title: string;
  type: string;
};

// Types fro news
export type NewsForAdmin = {
  id: string;
  title: string;
  attendees: string;
  events: string;
  secondEvents: string | null;
  thirdEvents: string | null;
  conclusion: string | null;
  data: string | null;
  photo: string;
};

export type FrontPageNews = {
  id: string;
  title: string;
  photo: string;
};

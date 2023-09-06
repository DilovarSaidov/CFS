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

export type CommitteesType = {
  id: string;
  title: string;
  type: string;
};

export type News = {
  id: string;
  title: string;
  attendees: string;
  events: string;
  secondEvents: string | null;
  thirdEvents: string | null;
  conclusion: string | null;
  photo: string;
};

const teamMembers = [
  { id: 1, name: 'Katherine N.', subteam: 'Project Management', title: 'Project Manager', image: '/leadPhotos/Katherine.jpg' },
  { id: 7, name: 'Laasya', subteam: 'Project Management', title: 'Project Manager', image: null },
  { id: 2, name: 'Violet', subteam: 'Project Management', title: 'Project Manager', image: '/leadPhotos/Violet.jpg' },
  { id: 16, name: 'Alan', subteam: 'Aerodynamics', title: 'Aerodynamics Lead', image: null },
  { id: 3, name: 'Antonio', subteam: 'Aerodynamics', title: 'Aerodynamics Lead', image: '/leadPhotos/Antonio.jpg' },
  { id: 17, name: 'Paulina', subteam: 'Aerodynamics', title: 'Aerodynamics Lead', image: null },
  { id: 11, name: 'Aidan', subteam: 'Controls', title: 'Controls Lead', image: null },
  { id: 14, name: 'Jason', subteam: 'Controls', title: 'Controls Lead, Web Dev', image: null },
  { id: 12, name: 'Sidney', subteam: 'Controls', title: 'Controls Lead', image: null },
  { id: 13, name: 'Steven', subteam: 'Controls', title: 'Controls Lead', image: null },
  { id: 8, name: 'Alex', subteam: 'Mechanical', title: 'Mechanical Lead', image: null },
  { id: 9, name: 'Jakob', subteam: 'Mechanical', title: 'Mechanical Lead', image: null },
  { id: 10, name: 'Marco', subteam: 'Mechanical', title: 'Mechanical Lead', image: null },
  { id: 15, name: 'Audrey', subteam: 'Power', title: 'Power Lead', image: null },
  { id: 4, name: 'Joshwyn', subteam: 'Power', title: 'Power Lead', image: '/leadPhotos/Joshwyn.jpg' },
  { id: 18, name: 'Robert', subteam: 'Mechanical', title: 'Mechanical Lead', image: null },
  { id: 5, name: 'Sanjitha', subteam: 'Power', title: 'Power Lead', image: '/leadPhotos/Sanjitha.jpeg' },
  { id: 6, name: 'Chantel', subteam: 'Structural', title: 'Structural Lead', image: '/leadPhotos/Chantel.PNG' },
  { id: 19, name: 'Leina', subteam: 'Sustainability', title: 'Sustainability Lead', image: null },
];

export const displayedTeamMembers = [...teamMembers].sort((a, b) => {
  const aIsPM = a.subteam === 'Project Management';
  const bIsPM = b.subteam === 'Project Management';

  if (aIsPM && !bIsPM) return -1;
  if (!aIsPM && bIsPM) return 1;

  const subteamCompare = a.subteam.localeCompare(b.subteam);
  if (subteamCompare !== 0) return subteamCompare;

  return a.name.localeCompare(b.name);
});

// Site-wide settings. Anything left as null is hidden on the site until you fill it in.
export const site = {
  name: 'Fools Flagon',
  owner: 'Evan Roberts',
  tagline: 'Code · Design · Craft',
  email: 'evan@foolsflagon.com',
  linkedin: 'https://www.linkedin.com/in/roberts-evan',
  github: 'https://github.com/FoolsFlagonStudio',
  // Put your resume at public/resume.pdf, then set this to '/resume.pdf'.
  resumeUrl: null as string | null,
  // Optional: a Formspree (or similar) endpoint for the contact form.
  // Without one, the form opens the visitor's email app instead.
  formEndpoint: null as string | null,
  // Optional: shown on the Services page, e.g. 'Projects typically start at $2,500'.
  startingPrice: null as string | null,
  // Where you're looking for full-time roles.
  lookingFor: 'Open to full-time engineering roles in Greater Boston, and to select freelance projects.',
};

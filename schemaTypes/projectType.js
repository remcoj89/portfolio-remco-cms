import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  groups: [
    {name: 'details', title: "Details"},
    {name: 'editorials', title: "Editorials"},
  ],
  fields: [
    // Title field
    defineField({
      name: 'name',
      type: 'string',
      title:"Titel",
      description: "Naam van het project",
      group: ['details', 'editorials'],
      validation: (rule) => rule
      .required()
      .error("Verplicht om een pagina te genereren op de website"),
    }),
    // Slug field
    defineField({
      name: 'slug',
      type: 'slug',
      description: "Url van het project (klik op generate)",
      group: 'details',
      options: {source: 'name'},
      validation: (rule) => rule
      .required()
      .error("Verplicht om een pagina te genereren op de website"),
    hidden: ({document}) => !document?.name,
    }),
    // Subtitle field
    defineField({
      name: 'subtitle',
      type: 'string',
      title: "Sub titel",
      description: "Slogan",
      group: ['details', 'editorials'],
      validation: (rule) => rule
      .required()
      .error("Verplicht om een pagina te genereren op de website"),
    }),
    // Type of project field
    defineField({
      name: 'type',
      type: 'string',
      title: 'Project type',
      description: "Selecteer klant of oefen project",
      options: {
        list: ['Oefen Project', 'Klant Project'],
        layout: "radio"
      },
      validation: (rule) => rule
      .required()
      .error("Verplicht om een pagina te genereren op de website"),
    }),
    // Used stack field
    defineField({
      name: 'stack',
      type: 'array',
      title: "Gebruikte Stack",
      description: "Selecteer de gebruikte technologie",
      of: [{type: 'string'}],
      options: {
        list: [
          {title: "HTML5", value: "html"},
          {title: "CSS3", value: "css"},
          {title: "Sass", value: "scss"},
          {title: "Tailwind", value: "tailwind"},
          {title: "Bootstrap", value: "bootstrap"},
          {title: "JavaScript", value: "javascript"},
          {title: "Vue.js", value: "vue"},
          {title: "React", value: "react"},
          {title: "Nextjs", value: "nextjs"},
          {title: "Ruby on Rails", value: "rails"},
          {title: "Sanity", value: "sanity"},
          {title: "Webflow", value: "webflow"},
          {title: "Git", value: "git"},
          {title: "Figma", value: "figma"},
          ],
        layout: 'grid'
      },
      validation: (rule) => rule
      .required()
      .error("Verplicht om een pagina te genereren op de website"),
    }),
    // Build time field
    defineField({
      name: 'buildTime',
      type: 'number',
      description: "vul de bouw tijd in",
      validation: (rule) => rule
      .required()
      .error("Verplicht om een pagina te genereren op de website"),
    }),
    // Project image field
    defineField({
      name: 'thumbnail',
      type: 'image',
      title: "Thumbnail",
      description: "Thumbnail van de website",
      }),
      // Meta Title
      defineField({
        name: 'metatitle',
        type: 'string',
        title: "Meta Title",
        description: "Meta titles mogen maximaal 60 tekens lang zijn, inclusief spaties. ",
        validation: rule => rule.required().min(10).max(60)
        .error("De meta beschrijving moet minimaal 10 karakters zijn en maximaal 60 karakters")
      }),
      // Meta Description
      defineField({
        name: 'metadescription',
        type: 'string',
        title: "Meta Beschrijving",
        description: "Meta descriptions worden afgekapt als ze te lang zijn. Als vuistregel kun je het beste 120 tot 160 tekens gebruiken.",
        validation: rule => rule.required().min(50).max(160)
        .error("De meta beschrijving moet minimaal 50 karakters zijn en maximaal 160 karakters")
      }),
    // Source code field
    defineField({
      name: 'sourceCode',
      type: 'url',
      Title:"Github Repo",
      description: "Link naar de Github repository",
    }),
    // Live view field
    defineField({
      name: 'liveView',
      type: 'url',
      title:"Live Website",
      description: "Link naar de live website",
    }),
    // Project description Field
    defineField({
      name: 'description',
      type: 'array',
      title: "Project beschrijving",
      description: "Beschrijving van het project",
      of: [{type: 'block'}, { type: 'image' }],
      validation: (rule) => rule
      .required()
      .error("Verplicht om een pagina te genereren op de website"),
    }),
  ],
})

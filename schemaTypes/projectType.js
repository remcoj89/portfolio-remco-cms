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
    // Type of project field
    defineField({
      name: 'type',
      type: 'string',
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
      description: "Selecteer de gebruikte tech",
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
      description: "Thumbnail van de website",
    }),
    // Source code field
    defineField({
      name: 'sourceCode',
      type: 'url',
      description: "Link naar de Github repository",
    }),
    // Live view field
    defineField({
      name: 'liveView',
      type: 'url',
      description: "Link naar de live website",
    }),
    // Project description Field
    defineField({
      name: 'description',
      type: 'array',
      description: "Beschrijving van het project",
      of: [{type: 'block'}],
      validation: (rule) => rule
      .required()
      .error("Verplicht om een pagina te genereren op de website"),
    }),
  ],
})

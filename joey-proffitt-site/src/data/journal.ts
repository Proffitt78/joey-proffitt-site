export const journalSeries = [
    {
        id: 'building-ammiti',
        title: 'Building Ammiti',
        description: 'A closer look at the social platform I designed, built, and launched.',
    },
    {
        id: 'behind-the-identity',
        title: 'Behind the Identity',
        description: 'The ideas inside a mark: letters, symbols, and visual connections.',
    },
    {
        id: 'photo-notebook',
        title: 'Photo Notebook',
        description: 'A home for photography and the editing that shapes the finished image.',
    },
]
// Each section can opt into its own image style; images stay full width by default.
export interface JournalSection {
    title: string
    paragraphs: string[]
    gallery?: boolean
    image?: string
    imageClass?: string
    alt?: string
    caption?: string
}

export interface JournalEntry {
    // The slug is the readable URL segment, such as /journal/ammiti-logo.
    slug: string
    series: string
    title: string
    description: string
    sections: JournalSection[]
}

export const journalEntries: JournalEntry[] = [
    {
        slug: 'introducing-ammiti',
        series: 'building-ammiti',
        title: 'Ammiti: something of my own to build',
        description: 'Why I built a social platform, what it includes, and a look inside the app.',
        sections: [
            {
                title: 'A project I could share',
                paragraphs: [
                    'After eight years working for the government, my job ended. Most of the projects I had worked on were not things I could publicly show. I had experience, but very little I could put in front of a prospective employer.',
                    'Ammiti gave me something of my own to build. I designed, built, and launched the platform independently, working across the interface, backend, and database.',
                ],
            },
            {
                title: 'An entire social platform',
                paragraphs: [
                    'Ammiti has profiles, posts, groups, and messaging. It is a complete application rather than a single demonstration screen. The screenshots below offer a look at signing in, member profiles, editing information, and post conversations.',
                ],
                gallery: true,
            },
            {
                title: 'Design and development together',
                paragraphs: [
                    'My strongest area is the frontend, where design meets development. Ammiti brings that work together with backend services and data. I used research, documentation, and AI tools to work through problems, made the decisions, and took responsibility for the finished product.',
                    'This journal gives me a place to explore individual parts of that work in more detail. The product overview is a starting point; the interface and identity each have their own story.',
                ],
            },
        ],
    },
    {
        slug: 'ammiti-logo',
        series: 'behind-the-identity',
        title: 'An A, a peace symbol, and a smile',
        description:
            'The three elements inside Ammiti’s logo, and their connection to a social app.',
        sections: [
            {
                title: 'One mark, three elements',
                paragraphs: [
                    'The Ammiti logo is a stylized letter A that incorporates a peace symbol and a smiley face. The letter gives it a direct connection to the application’s name, while the other elements give the mark a more personal character.',
                ],
                image: '/images/ammiti/Ammiti-favicon_1.png',
                imageClass: 'journal-logo',
                alt: 'Ammiti logo: a stylized A incorporating a peace symbol and a smiley face.',
                caption: 'The Ammiti logo combines a letter A, a peace symbol, and a smile.',
            },
            {
                title: 'An identity attached to a real product',
                paragraphs: [
                    'This logo belongs to a social platform I built and launched. It is part of the same project as the profiles, posts, groups, and messaging. Looking at it within the application gives it context beyond an isolated logo presentation.',
                ],
            },
        ],
    },
]

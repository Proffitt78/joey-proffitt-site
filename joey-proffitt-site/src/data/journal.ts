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
    illustration?: 'dunes-logo'
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
    relatedProject?: { path: string; label: string }
    sections: JournalSection[]
}

export const journalEntries: JournalEntry[] = [
    {
        slug: 'introducing-ammiti',
        relatedProject: { path: '/work/ammiti', label: 'View the Ammiti project' },
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
        relatedProject: { path: '/work/ammiti', label: 'View the Ammiti project' },
        series: 'behind-the-identity',
        title: 'An A, a peace symbol, and a smile',
        description:
            'How a letter A, a peace symbol, a smile, and the color yellow express the idea behind Ammiti.',
        sections: [
            {
                title: 'One mark, three elements',
                paragraphs: [
                    'I designed the Ammiti logo around a stylized letter A, incorporating a peace symbol and a smiley face into the same mark. Each element connects to the name and the peaceful, pleasant atmosphere I wanted the application to convey.',
                ],
                image: '/images/ammiti/Ammiti-favicon_1.png',
                imageClass: 'journal-logo',
                alt: 'Ammiti logo: a stylized A incorporating a peace symbol and a smiley face.',
                caption: 'The Ammiti logo combines a letter A, a peace symbol, and a smile.',
            },
            {
                title: 'A name rooted in amity',
                paragraphs: [
                    'Ammiti is a play on the word “amity,” meaning friendship and peaceful relations. The letter A stands for Ammiti and gives the logo a direct connection to the application’s name. That idea of friendliness also guided the symbols I incorporated into the letter.',
                ],
            },
            {
                title: 'Peace and a smile',
                paragraphs: [
                    'The peace symbol and smiley face reinforce the feeling behind the name. I included them to communicate a peaceful and pleasant social space. Combining them with the A lets the logo carry that idea within a single mark.',
                ],
            },
            {
                title: 'Why yellow?',
                paragraphs: [
                    'I chose yellow to support that same peaceful, pleasant feeling. For this identity, I wanted the color to feel warm, cheerful, and welcoming alongside the peace symbol and smile.',
                    'The letter, symbols, and color were intentional parts of the same design. Together, they express the atmosphere I wanted Ammiti to have before someone even starts using the application.',
                ],
            },
            {
                title: 'An identity attached to a real product',
                paragraphs: [
                    'This logo belongs to a social platform I built and launched. It is part of the same project as the profiles, posts, groups, and messaging. Looking at it within the application gives it context beyond an isolated logo presentation.',
                ],
            },
        ],
    },
    {
        slug: 'the-dunes-logo',
        series: 'behind-the-identity',
        title: 'The Dunes: a letter, a note, a wave',
        description:
            'A lowercase d, a hint of a musical note, and a coastal image when turned sideways.',
        sections: [
            {
                title: 'A mark for my band',
                paragraphs: [
                    'I designed this logo for my band, The Dunes. Upright, it is a stylized lowercase d that also slightly resembles a musical note. The letter connects the mark to the band’s name, while the musical reference connects it to what we do.',
                    'Turned sideways, the same shape looks like a wave crashing on a sand dune. That relationship between the letter and the coastal image is the idea at the heart of the design.',
                ],
                illustration: 'dunes-logo',
            },
            {
                title: 'A letter, a note, and a coastal image',
                paragraphs: [
                    'I wanted the logo to do more than represent an initial. The upright shape brings together the lowercase d and a subtle musical-note resemblance. Turned sideways, the wave and sand dune connect it to the name in another way. These references are part of the same shape, giving the mark both a musical and a coastal connection.',
                ],
            },
        ],
    },
]

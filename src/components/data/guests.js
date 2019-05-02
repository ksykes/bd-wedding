const guests = [
    {
        name: '---Click to select your name:---'
    },
    {
        name: 'Kait Sykes',
        plus: true,
        plusName: 'Guest'
    },
    {
        name: 'Séanin Steele',
        plus: true,
        plusName: 'Guest'
    },
    {
        name: 'Karchiri Clack',
        plus: true,
        plusName: 'Patrick Diep'
    },
    {
        name: 'Carleigh Roughley',
        plus: true,
        plusName: 'Jon Roughley'
    },
    {
        name: 'Sydney Cranstone',
        plus: true,
        plusName: 'Kevin Voros'
    },
    {
        name: 'Eric Kirk',
        plus: true,
        plusName: 'Emily Gagovski'
    },
    {
        name: 'Brodey Blair',
        plus: true,
        plusName: 'Guest'
    },
    {
        name: 'Grant Wever',
        plus: true,
        plusName: 'Guest'
    },
    {
        name: 'Mike Pennington',
        plus: true,
        plusName: 'Laura Jay'
    },
    {
        name: 'Julian Rossiter',
        plus: true,
        plusName: 'Guest'
    },
    {
        name: 'Patrick Torrens',
        plus: true,
        plusName: 'Tiana Ferinac'
    },
    {
        name: 'Brett Kirk',
        plus: true,
        plusName: 'Kelly Kirk'
    },
    {
        name: 'Steve Christian',
        plus: true,
        plusName: 'Lora Grey'
    },
    {
        name: 'Stacey Christian',
        plus: false
    },
    {
        name: 'Matt Kenyon',
        plus: true,
        plusName: 'Jaclyn Patterson'
    },
    {
        name: 'Paige Taylor',
        plus: true,
        plusName: 'Chris Taylor'
    },
    {
        name: 'Sam Kenyon',
        plus: true,
        plusName: 'Jay Bennett'
    },
    {
        name: 'Jake Lewis',
        plus: true,
        plusName: 'Casey McKay'
    },
    {
        name: 'Dana Baillie',
        plus: false
    },
    {
        name: 'Robin Lewis',
        plus: true,
        plusName: 'Brad Lewis'
    },
    {
        name: 'Laura Kenyon',
        plus: true,
        plusName: 'Tony Hale'
    },
    {
        name: 'Irene Kirk',
        plus: false
    },
    {
        name: 'Marty Garrett',
        plus: false
    },
    {
        name: 'Gary Garrett',
        plus: true,
        plusName: 'Barb Kaluza'
    },
    {
        name: 'Al Newton',
        plus: true,
        plusName: 'Donna Newton'
    },
    {
        name: 'Chris Garrett',
        plus: true,
        plusName: 'Lesley Garrett'
    },
    {
        name: 'Grant Garrett',
        plus: true,
        plusName: 'Jenn Noel'
    },
    {
        name: 'Craig Kee',
        plus: true,
        plusName: 'Mimi Wilde'
    },
    {
        name: 'Rory Kee',
        plus: true,
        plusName: 'Jill Kee'
    },
    {
        name: 'Connor Kee',
        plus: true,
        plusName: 'Catherine Snider'
    },
    {
        name: 'Spencer Garrett',
        plus: true,
        plusName: 'Kristin Turner'
    },
    {
        name: 'Melanie Garrett',
        plus: false
    },
    {
        name: 'Brian Cranstone',
        plus: true,
        plusName: 'Sharon Cranstone'
    },
    {
        name: 'Jay Cranstone',
        plus: true,
        plusName: 'Jenny Cranstone'
    },
    {
        name: 'Evan Cranstone',
        plus: true,
        plusName: 'Shawn Gallant'
    },
    {
        name: 'Connor Cranstone',
        plus: false
    },
    {
        name: 'Dave Cranstone',
        plus: true,
        plusName: 'Pat Cranstone'
    },
    {
        name: 'Lynda Charbonneau',
        plus: true,
        plusName: 'Paul Charbonneau'
    },
    {
        name: 'George McArthur',
        plus: true,
        plusName: 'Gwen McArthur'
    },
    {
        name: 'Kim Graham',
        plus: true,
        plusName: 'David Graham'
    },
    {
        name: 'Shari McArthur',
        plus: true,
        plusName: 'Steve McArthur'
    },
    {
        name: 'Jeff Graham',
        plus: true,
        plusName: 'Natalie Graham'
    },
    {
        name: 'Scott Graham',
        plus: true,
        plusName: 'Meagan Puterman'
    },
    {
        name: 'Kaitlin McArthur',
        plus: true,
        plusName: 'Ryan Kirley'
    },
    {
        name: 'Rick Burdzy',
        plus: true,
        plusName: 'Donna Burdzy'
    },
    {
        name: 'Jeff Burdzy',
        plus: true,
        plusName: 'Kristine Burdzy'
    },
    {
        name: 'Alex Burdzy',
        plus: false
    },
    {
        name: 'Richard Kipin',
        plus: true,
        plusName: 'Tracey Kipin'
    },
    {
        name: 'Connor Kipin',
        plus: false
    },
    {
        name: 'Dylan Kipin',
        plus: false
    },
    {
        name: 'Noah Kipin',
        plus: true,
        plusName: 'Danielle Charron'
    },
    {
        name: 'Carleigh Monk',
        plus: false
    },
    {
        name: 'Graeme Hamilton',
        plus: true,
        plusName: 'Melanie Frappier'
    },
    {
        name: 'Cam Brennan',
        plus: false
    },
    {
        name: 'Brett Torrens',
        plus: false
    },
    {
        name: 'Shannon Tonkin',
        plus: true,
        plusName: 'Jodi Bobechko'
    },
    {
        name: 'Bruce Borrie',
        plus: true,
        plusName: 'Jackie Borrie'
    },
    {
        name: 'Charles Hamilton',
        plus: true,
        plusName: 'Susan Hamilton'
    },
    {
        name: 'Tom Koeltz',
        plus: true,
        plusName: 'Sue Koeltz'
    },
    {
        name: 'John Jeremic',
        plus: true,
        plusName: 'Darlene Jeremic'
    },
    {
        name: 'Kyle Van de Valk',
        plus: true,
        plusName: 'Drew Ayotte'
    },
    {
        name: 'Jeremy James',
        plus: false
    }
]

export default guests
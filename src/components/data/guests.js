const guests = [
    {
        value: 'Kait Sykes',
        label: 'Kait Sykes',
        name: 'name',
        plus: false
    },
    {
        value: 'Séanin Steele',
        label: 'Séanin Steele',
        name: 'name',
        plus: false
    },
    {
        value: 'Karchiri Clack',
        label: 'Karchiri Clack',
        name: 'name',
        plus: true,
        plusName: 'Patrick Diep'
    },
    {
        value: 'Carleigh Roughley',
        label: 'Carleigh Roughley',
        name: 'name',
        plus: true,
        plusName: 'Jon Roughley'
    },
    {
        value: 'Sydney Cranstone',
        label: 'Sydney Cranstone',
        name: 'name',
        plus: true,
        plusName: 'Kevin Voros'
    },
    {
        value: 'Eric Kirk',
        label: 'Eric Kirk',
        name: 'name',
        plus: true,
        plusName: 'Emily Gagovski'
    },
    {
        value: 'Brodey Blair',
        label: 'Brodey Blair',
        name: 'name',
        plus: false
    },
    {
        value: 'Grant Wever',
        label: 'Grant Wever',
        name: 'name',
        plus: false
    },
    {
        value: 'Mike Pennington',
        label: 'Mike Pennington',
        name: 'name',
        plus: true,
        plusName: 'Laura Jay'
    },
    {
        value: 'Julian Rossiter',
        label: 'Julian Rossiter',
        name: 'name',
        plus: false
    },
    {
        value: 'Patrick Torrens',
        label: 'Patrick Torrens',
        name: 'name',
        plus: true,
        plusName: 'Tiana Ferinac'
    },
    {
        value: 'Brett Kirk',
        label: 'Brett Kirk',
        name: 'name',
        plus: true,
        plusName: 'Kelly Kirk'
    },
    {
        value: 'Steve Christian',
        label: 'Steve Christian',
        name: 'name',
        plus: true,
        plusName: 'Lora Grey'
    },
    {
        value: 'Stacey Christian',
        label: 'Stacey Christian',
        name: 'name',
        plus: false
    },
    {
        value: 'Matt Kenyon',
        label: 'Matt Kenyon',
        name: 'name',
        plus: true,
        plusName: 'Jaclyn Patterson'
    },
    {
        value: 'Paige Taylor',
        label: 'Paige Taylor',
        name: 'name',
        plus: true,
        plusName: 'Chris Taylor'
    },
    {
        value: 'Sam Kenyon',
        label: 'Sam Kenyon',
        name: 'name',
        plus: true,
        plusName: 'Jay Bennett'
    },
    {
        value: 'Jake Lewis',
        label: 'Jake Lewis',
        name: 'name',
        plus: true,
        plusName: 'Casey McKay'
    },
    {
        value: 'Dana Baillie',
        label: 'Dana Baillie',
        name: 'name',
        plus: false
    },
    {
        value: 'Robin Lewis',
        label: 'Robin Lewis',
        name: 'name',
        plus: true,
        plusName: 'Brad Lewis'
    },
    {
        value: 'Laura Kenyon',
        label: 'Laura Kenyon',
        name: 'name',
        plus: true,
        plusName: 'Tony Hale'
    },
    {
        value: 'Irene Kirk',
        label: 'Irene Kirk',
        name: 'name',
        plus: false
    },
    {
        value: 'Marty Garrett',
        label: 'Marty Garrett',
        name: 'name',
        plus: false
    },
    {
        value: 'Gary Garrett',
        label: 'Gary Garrett',
        name: 'name',
        plus: true,
        plusName: 'Barb Kaluza'
    },
    {
        value: 'Al Newton',
        label: 'Al Newton',
        name: 'name',
        plus: true,
        plusName: 'Donna Newton'
    },
    {
        value: 'Chris Garrett',
        label: 'Chris Garrett',
        name: 'name',
        plus: true,
        plusName: 'Lesley Garrett'
    },
    {
        value: 'Grant Garrett',
        label: 'Grant Garrett',
        name: 'name',
        plus: true,
        plusName: 'Jenn Noel'
    },
    {
        value: 'Craig Kee',
        label: 'Craig Kee',
        name: 'name',
        plus: true,
        plusName: 'Mimi Wilde'
    },
    {
        value: 'Rory Kee',
        label: 'Rory Kee',
        name: 'name',
        plus: true,
        plusName: 'Jill Kee'
    },
    {
        value: 'Connor Kee',
        label: 'Connor Kee',
        name: 'name',
        plus: true,
        plusName: 'Catherine Snider'
    },
    {
        value: 'Spencer Garrett',
        label: 'Spencer Garrett',
        name: 'name',
        plus: true,
        plusName: 'Kristin Turner'
    },
    {
        value: 'Melanie Garrett',
        label: 'Melanie Garrett',
        name: 'name',
        plus: false
    },
    {
        value: 'Brian Cranstone',
        label: 'Brian Cranstone',
        name: 'name',
        plus: true,
        plusName: 'Sharon Cranstone'
    },
    {
        value: 'Jay Cranstone',
        label: 'Jay Cranstone',
        name: 'name',
        plus: true,
        plusName: 'Jenny Cranstone'
    },
    {
        value: 'Evan Cranstone',
        label: 'Evan Cranstone',
        name: 'name',
        plus: true,
        plusName: 'Shawn Gallant'
    },
    {
        value: 'Connor Cranstone',
        label: 'Connor Cranstone',
        name: 'name',
        plus: false
    },
    {
        value: 'Dave Cranstone',
        label: 'Dave Cranstone',
        name: 'name',
        plus: true,
        plusName: 'Pat Cranstone'
    },
    {
        value: 'Lynda Charbonneau',
        label: 'Lynda Charbonneau',
        name: 'name',
        plus: true,
        plusName: 'Paul Charbonneau'
    },
    {
        value: 'George McArthur',
        label: 'George McArthur',
        name: 'name',
        plus: true,
        plusName: 'Gwen McArthur'
    },
    {
        value: 'Kim Graham',
        label: 'Kim Graham',
        name: 'name',
        plus: true,
        plusName: 'David Graham'
    },
    {
        value: 'Shari McArthur',
        label: 'Shari McArthur',
        name: 'name',
        plus: true,
        plusName: 'Steve McArthur'
    },
    {
        value: 'Jeff Graham',
        label: 'Jeff Graham',
        name: 'name',
        plus: true,
        plusName: 'Natalie Graham'
    },
    {
        value: 'Scott Graham',
        label: 'Scott Graham',
        name: 'name',
        plus: true,
        plusName: 'Meagan Puterman'
    },
    {
        value: 'Kaitlin McArthur',
        label: 'Kaitlin McArthur',
        name: 'name',
        plus: true,
        plusName: 'Ryan Kirley'
    },
    {
        value: 'Rick Burdzy',
        label: 'Rick Burdzy',
        name: 'name',
        plus: true,
        plusName: 'Donna Burdzy'
    },
    {
        value: 'Jeff Burdzy',
        label: 'Jeff Burdzy',
        name: 'name',
        plus: true,
        plusName: 'Kristine Burdzy'
    },
    {
        value: 'Alex Burdzy',
        label: 'Alex Burdzy',
        name: 'name',
        plus: false
    },
    {
        value: 'Richard Kipin',
        label: 'Richard Kipin',
        name: 'name',
        plus: true,
        plusName: 'Tracey Kipin'
    },
    {
        value: 'Connor Kipin',
        label: 'Connor Kipin',
        name: 'name',
        plus: false
    },
    {
        value: 'Dylan Kipin',
        label: 'Dylan Kipin',
        name: 'name',
        plus: false
    },
    {
        value: 'Noah Kipin',
        label: 'Noah Kipin',
        name: 'name',
        plus: true,
        plusName: 'Danielle Charron'
    },
    {
        value: 'Carleigh Monk',
        label: 'Carleigh Monk',
        name: 'name',
        plus: false
    },
    {
        value: 'Graeme Hamilton',
        label: 'Graeme Hamilton',
        name: 'name',
        plus: true,
        plusName: 'Melanie Frappier'
    },
    {
        value: 'Cam Brennan',
        label: 'Cam Brennan',
        name: 'name',
        plus: false
    },
    {
        value: 'Brett Torrens',
        label: 'Brett Torrens',
        name: 'name',
        plus: false
    },
    {
        value: 'Shannon Tonkin',
        label: 'Shannon Tonkin',
        name: 'name',
        plus: true,
        plusName: 'Jodi Bobechko'
    },
    {
        value: 'Bruce Borrie',
        label: 'Bruce Borrie',
        name: 'name',
        plus: true,
        plusName: 'Jackie Borrie'
    },
    {
        value: 'Charles Hamilton',
        label: 'Charles Hamilton',
        name: 'name',
        plus: true,
        plusName: 'Susan Hamilton'
    },
    {
        value: 'Tom Koeltz',
        label: 'Tom Koeltz',
        name: 'name',
        plus: true,
        plusName: 'Sue Koeltz'
    },
    {
        value: 'John Jeremic',
        label: 'John Jeremic',
        name: 'name',
        plus: true,
        plusName: 'Darlene Jeremic'
    },
    {
        value: 'Kyle Van de Valk',
        label: 'Kyle Van de Valk',
        name: 'name',
        plus: true,
        plusName: 'Drew Ayotte'
    },
    {
        value: 'Jeremy James',
        label: 'Jeremy James',
        name: 'name',
        plus: false
    }
]

export default guests
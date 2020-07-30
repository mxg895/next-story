db.profiles.remove({});
db.books.remove({});
db.movies.remove({});
db.nextStoryTags.remove({});
db.popular.drop();
db.reviewRatings.remove({});
db.nextStoryTags.insertMany([
        {
            tagId: 'tag-000',
            tagName: 'Happily Ever After',
            tagDescription: 'Yay! everything works out in the end :) All\'s well that ends well'
        },
        {
            tagId: 'tag-001',
            tagName: 'Downer Ending',
            tagDescription: 'uh-oh the protagonists die or something in this one :/ to be avoided by the faint of heart!'
        },
        {
            tagId: 'tag-002',
            tagName: 'Tolkien-eque',
            tagDescription: 'Elves and orcs and dwarves! This tag is for stories that have elements clearly inspired by the fantasy world of J.R.R. Tolkein.'
        },
        {
            tagId: 'tag-003',
            tagName: 'Save The World',
            tagDescription: 'Epic conflict on a world wide scale? Do the protagnists need to save the world? If yes, this is the tag for you!'
        },
        {
            tagId: 'tag-004',
            tagName: 'The Chosen One',
            tagDescription: 'This character alone is capable of solving the conflict.'
        },
        {
            tagId: 'tag-005',
            tagName: 'Reluctant Hero',
            tagDescription: 'The hero of this story doesn\'t want to do any heroing at all, but the story has other plans of them.'
        },
        {
            tagId: 'tag-006',
            tagName: 'Mentor Character',
            tagDescription: 'So many stories have a mentor character that guides the fledgling hero to greatness.'
        }
    ]
);
db.reviewRatings.insertMany([
        {
            mediaType: 'movie',
            id: '343611',
            text: 'Worst movie I have ever seenLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            userId: 'user-000',
            userName: 'FirstName LastName',
            datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: 2
        },
        {
            mediaType: 'movie',
            id: '343611',
            text: 'amazing movie!',
            userId: 'user-001',
            userName: 'FirstName2 LastName2',
            datePosted: 'Wed Jun 18 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: 4
        },
        {
            mediaType: 'movie',
            id: '343611',
            text: 'meh',
            userId: 'user-002',
            userName: 'Name = this user does not actually exist :P ',
            datePosted: 'Wed Jun 18 2020 19:14:50 GMT-0700 (Pacific Daylight Time)',
            rating: undefined
        },
        {
            mediaType: 'movie',
            id: 'movie-001',
            text: 'Worst movie I have ever seen',
            userId: 'user-000',
            userName: 'FirstName LastName',
            datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: 2
        },
        {
            mediaType: 'movie',
            id: 'movie-001',
            text: 'amazing movie!',
            userId: 'user-001',
            userName: 'FirstName2 LastName2',
            datePosted: 'Wed Jun 18 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: 4
        },
        {
            mediaType: 'movie',
            id: 'movie-001',
            text: 'mehLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            userId: 'user-002',
            userName: 'Name = this user does not actually exist :P ',
            datePosted: 'Wed Jun 18 2020 19:14:50 GMT-0700 (Pacific Daylight Time)',
            rating: undefined
        },
        {
            mediaType: 'movie',
            id: 'movie-003',
            text: 'Worst movie I have ever seen',
            userId: 'user-000',
            userName: 'FirstName LastName',
            datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: 2
        },
        {
            mediaType: 'movie',
            id: 'movie-003',
            text: 'amazing movie! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            userId: 'user-001',
            userName: 'FirstName2 LastName2',
            datePosted: 'Wed Jun 18 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: 4
        },
        {
            mediaType: 'movie',
            id: 'movie-003',
            text: 'meh',
            userId: 'user-002',
            userName: 'Name = this user does not actually exist :P ',
            datePosted: 'Wed Jun 18 2020 19:14:50 GMT-0700 (Pacific Daylight Time)',
            rating: undefined
        },
        {
            mediaType: 'movie',
            id: 'movie-004',
            text: 'Worst movie I have ever seen Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            userId: 'user-000',
            userName: 'FirstName LastName',
            datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: 0
        },
        {
            mediaType: 'movie',
            id: 'movie-004',
            text: 'amazing movie!',
            userId: 'user-001',
            userName: 'FirstName2 LastName2',
            datePosted: 'Wed Jun 18 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: 4
        },
        {
            mediaType: 'movie',
            id: 'movie-004',
            text: 'meh',
            userId: 'user-002',
            userName: 'Name = this user does not actually exist :P ',
            datePosted: 'Wed Jun 18 2020 19:14:50 GMT-0700 (Pacific Daylight Time)',
            rating: undefined
        },
        {
            mediaType: 'movie',
            id: 'movie-005',
            text: 'Worst movie I have ever seen',
            userId: 'user-000',
            userName: 'FirstName LastName',
            datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: 2
        },
        {
            mediaType: 'movie',
            id: 'movie-005',
            text: 'amazing movie!',
            userId: 'user-001',
            userName: 'FirstName2 LastName2',
            datePosted: 'Wed Jun 18 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: 4
        },
        {
            mediaType: 'movie',
            id: 'movie-005',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            userId: 'user-002',
            userName: 'Name = this user does not actually exist :P ',
            datePosted: 'Wed Jun 18 2020 19:14:50 GMT-0700 (Pacific Daylight Time)',
            rating: undefined
        },
        {
            mediaType: 'movie',
            id: 'movie-006',
            text: 'Worst movie I have ever seen',
            userId: 'user-000',
            userName: 'FirstName LastName',
            datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: 2
        },
        {
            mediaType: 'movie',
            id: 'movie-006',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            userId: 'user-001',
            userName: 'FirstName2 LastName2',
            datePosted: 'Wed Jun 18 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: 4
        },
        {
            mediaType: 'movie',
            id: 'movie-006',
            text: 'meh',
            userId: 'user-002',
            userName: 'Name = this user does not actually exist :P ',
            datePosted: 'Wed Jun 18 2020 19:14:50 GMT-0700 (Pacific Daylight Time)',
            rating: undefined
        },
        {
            mediaType: 'book',
            id: 'book-000',
            text: 'Worst book I have ever read',
            userId: 'user-000',
            userName: 'FirstName LastName',
            datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: 1
        },
        {
            mediaType: 'book',
            id: 'book-000',
            text: 'amazing book!',
            userId: 'user-001',
            userName: 'FirstName2 LastName2',
            datePosted: 'Wed Jun 18 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: 5
        },
        {
            mediaType: 'book',
            id: 'book-000',
            text: '# Finita donaverit facies\n' +
                '\n' +
                '## Facit vastatoremque atria\n' +
                '\n' +
                'Lorem markdownum Auroram fuerat hostem spolium iuvenis triplices timet, Herculis\n' +
                'quas est, die *quam notare*. Tarentum **spumaque**: edaci vox cortice Peneos\n' +
                'umeris memoremque primae, quicquid falle *vivacisque undique*.\n' +
                '\n' +
                'Terrae lacertosi. Leves pacis tactuque, radiis caput, quater! Precantem dapes,\n' +
                'dum oris coniunx?\n' +
                '\n' +
                '> Ardua sed haud est me quidem autem fugit agros coniunx agro donec coniunx\n' +
                '> copia nisi! Seque vident sic, ibi deus surgis, servat deae os paratis!\n' +
                '\n' +
                'Potuisse quidem vultum mihi sedes supplice raucum. Oris vero membris, custos\n' +
                'nobis, flamma tumulo potest, ad age matri.\n' +
                '\n' +
                '## Pugnae Tartara\n' +
                '\n' +
                'Sorores est quam arcadiae exarsit pueri: gerebam metuenda quaerant tumet longo\n' +
                'constitit flectat, duce. Mentem in vetusto ostia: fluit dant coeunt, metu,\n' +
                'astris postquam vulgus coegit purpureas coactis.',
            userId: 'user-002',
            userName: 'Name = this user does not actually exist :P ',
            datePosted: 'Wed Jun 18 2020 19:14:50 GMT-0700 (Pacific Daylight Time)',
            rating: undefined
        },
        {
            mediaType: 'book',
            id: 'book-000',
            text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n' +
                '\n' +
                'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC\n' +
                '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"\n' +
                '\n' +
                '1914 translation by H. Rackham\n' +
                '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"\n' +
                '\n' +
                'Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC\n' +
                '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."',
            userId: 'user-003',
            userName: 'Name = this user does not exist :P ',
            datePosted: 'Wed Jun 18 2020 19:15:30 GMT-0700 (Pacific Daylight Time)',
            rating: 5
        },
        {
            mediaType: 'book',
            id: 'book-000',
            text: 'meh',
            userId: 'user-004',
            userName: 'Name = this user does not actually exist :P ',
            datePosted: 'Wed Jun 18 2020 21:15:30 GMT-0700 (Pacific Daylight Time)',
            rating: undefined
        },
        {
            mediaType: 'book',
            id: 'book-000',
            text: 'ok',
            userId: 'user-005',
            userName: 'Name = this user does not actually exist :P ',
            datePosted: 'Wed Jun 20 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: undefined
        },
        {
            mediaType: 'book',
            id: 'book-001',
            text: 'Worst book I have ever read',
            userId: 'user-000',
            userName: 'FirstName LastName',
            datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: 1
        },
        {
            mediaType: 'book',
            id: 'book-001',
            text: 'amazing book!',
            userId: 'user-001',
            userName: 'FirstName2 LastName2',
            datePosted: 'Wed Jun 18 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: 5
        },
        {
            mediaType: 'book',
            id: 'book-002',
            text: '# Finita donaverit facies\n' +
                '\n' +
                '## Facit vastatoremque atria\n' +
                '\n' +
                'Lorem markdownum Auroram fuerat hostem spolium iuvenis triplices timet, Herculis\n' +
                'quas est, die *quam notare*. Tarentum **spumaque**: edaci vox cortice Peneos\n' +
                'umeris memoremque primae, quicquid falle *vivacisque undique*.\n' +
                '\n' +
                'Terrae lacertosi. Leves pacis tactuque, radiis caput, quater! Precantem dapes,\n' +
                'dum oris coniunx?\n' +
                '\n' +
                '> Ardua sed haud est me quidem autem fugit agros coniunx agro donec coniunx\n' +
                '> copia nisi! Seque vident sic, ibi deus surgis, servat deae os paratis!\n' +
                '\n' +
                'Potuisse quidem vultum mihi sedes supplice raucum. Oris vero membris, custos\n' +
                'nobis, flamma tumulo potest, ad age matri.\n' +
                '\n' +
                '## Pugnae Tartara\n' +
                '\n' +
                'Sorores est quam arcadiae exarsit pueri: gerebam metuenda quaerant tumet longo\n' +
                'constitit flectat, duce. Mentem in vetusto ostia: fluit dant coeunt, metu,\n' +
                'astris postquam vulgus coegit purpureas coactis.',
            userId: 'user-002',
            userName: 'Name = this user does not actually exist :P ',
            datePosted: 'Wed Jun 18 2020 19:14:50 GMT-0700 (Pacific Daylight Time)',
            rating: undefined
        },
        {
            mediaType: 'book',
            id: 'book-003',
            text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n' +
                '\n' +
                'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC\n' +
                '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"\n' +
                '\n' +
                '1914 translation by H. Rackham\n' +
                '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"\n' +
                '\n' +
                'Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC\n' +
                '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."',
            userId: 'user-003',
            userName: 'Name = this user does not exist :P ',
            datePosted: 'Wed Jun 18 2020 19:15:30 GMT-0700 (Pacific Daylight Time)',
            rating: 5
        },
        {
            mediaType: 'book',
            id: 'book-000',
            text: 'meh',
            userId: 'user-004',
            userName: 'Name = this user does not actually exist :P ',
            datePosted: 'Wed Jun 18 2020 21:15:30 GMT-0700 (Pacific Daylight Time)',
            rating: undefined
        },
        {
            mediaType: 'book',
            id: 'book-004',
            text: 'ok',
            userId: 'user-005',
            userName: 'Name = this user does not actually exist :P ',
            datePosted: 'Wed Jun 20 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: undefined
        },
        {
            mediaType: 'book',
            id: 'book-002',
            text: 'Worst book I have ever read',
            userId: 'user-000',
            userName: 'FirstName LastName',
            datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: 1
        },
        {
            mediaType: 'book',
            id: 'book-002',
            text: 'amazing book!',
            userId: 'user-001',
            userName: 'FirstName2 LastName2',
            datePosted: 'Wed Jun 18 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: 5
        },
        {
            mediaType: 'book',
            id: 'book-002',
            text: '# Finita donaverit facies\n' +
                '\n' +
                '## Facit vastatoremque atria\n' +
                '\n' +
                'Lorem markdownum Auroram fuerat hostem spolium iuvenis triplices timet, Herculis\n' +
                'quas est, die *quam notare*. Tarentum **spumaque**: edaci vox cortice Peneos\n' +
                'umeris memoremque primae, quicquid falle *vivacisque undique*.\n' +
                '\n' +
                'Terrae lacertosi. Leves pacis tactuque, radiis caput, quater! Precantem dapes,\n' +
                'dum oris coniunx?\n' +
                '\n' +
                '> Ardua sed haud est me quidem autem fugit agros coniunx agro donec coniunx\n' +
                '> copia nisi! Seque vident sic, ibi deus surgis, servat deae os paratis!\n' +
                '\n' +
                'Potuisse quidem vultum mihi sedes supplice raucum. Oris vero membris, custos\n' +
                'nobis, flamma tumulo potest, ad age matri.\n' +
                '\n' +
                '## Pugnae Tartara\n' +
                '\n' +
                'Sorores est quam arcadiae exarsit pueri: gerebam metuenda quaerant tumet longo\n' +
                'constitit flectat, duce. Mentem in vetusto ostia: fluit dant coeunt, metu,\n' +
                'astris postquam vulgus coegit purpureas coactis.',
            userId: 'user-002',
            userName: 'Name = this user does not actually exist :P ',
            datePosted: 'Wed Jun 18 2020 19:14:50 GMT-0700 (Pacific Daylight Time)',
            rating: undefined
        },
        {
            mediaType: 'book',
            id: 'book-002',
            text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n' +
                '\n' +
                'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC\n' +
                '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"\n' +
                '\n' +
                '1914 translation by H. Rackham\n' +
                '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"\n' +
                '\n' +
                'Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC\n' +
                '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."',
            userId: 'user-003',
            userName: 'Name = this user does not exist :P ',
            datePosted: 'Wed Jun 18 2020 19:15:30 GMT-0700 (Pacific Daylight Time)',
            rating: 5
        },
        {
            mediaType: 'book',
            id: 'book-002',
            text: 'meh',
            userId: 'user-004',
            userName: 'Name = this user does not actually exist :P ',
            datePosted: 'Wed Jun 18 2020 21:15:30 GMT-0700 (Pacific Daylight Time)',
            rating: undefined
        },
        {
            mediaType: 'book',
            id: 'book-002',
            text: 'ok',
            userId: 'user-005',
            userName: 'Name = this user does not actually exist :P ',
            datePosted: 'Wed Jun 20 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: undefined
        },
        {
            mediaType: 'book',
            id: 'book-003',
            text: 'Worst book I have ever read',
            userId: 'user-000',
            userName: 'FirstName LastName',
            datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: 1
        },
        {
            mediaType: 'book',
            id: 'book-003',
            text: 'amazing book!',
            userId: 'user-001',
            userName: 'FirstName2 LastName2',
            datePosted: 'Wed Jun 18 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: 5
        },
        {
            mediaType: 'book',
            id: 'book-003',
            text: '# Finita donaverit facies\n' +
                '\n' +
                '## Facit vastatoremque atria\n' +
                '\n' +
                'Lorem markdownum Auroram fuerat hostem spolium iuvenis triplices timet, Herculis\n' +
                'quas est, die *quam notare*. Tarentum **spumaque**: edaci vox cortice Peneos\n' +
                'umeris memoremque primae, quicquid falle *vivacisque undique*.\n' +
                '\n' +
                'Terrae lacertosi. Leves pacis tactuque, radiis caput, quater! Precantem dapes,\n' +
                'dum oris coniunx?\n' +
                '\n' +
                '> Ardua sed haud est me quidem autem fugit agros coniunx agro donec coniunx\n' +
                '> copia nisi! Seque vident sic, ibi deus surgis, servat deae os paratis!\n' +
                '\n' +
                'Potuisse quidem vultum mihi sedes supplice raucum. Oris vero membris, custos\n' +
                'nobis, flamma tumulo potest, ad age matri.\n' +
                '\n' +
                '## Pugnae Tartara\n' +
                '\n' +
                'Sorores est quam arcadiae exarsit pueri: gerebam metuenda quaerant tumet longo\n' +
                'constitit flectat, duce. Mentem in vetusto ostia: fluit dant coeunt, metu,\n' +
                'astris postquam vulgus coegit purpureas coactis.',
            userId: 'user-002',
            userName: 'Name = this user does not actually exist :P ',
            datePosted: 'Wed Jun 18 2020 19:14:50 GMT-0700 (Pacific Daylight Time)',
            rating: undefined
        },
        {
            mediaType: 'book',
            id: 'book-000',
            text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n' +
                '\n' +
                'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC\n' +
                '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"\n' +
                '\n' +
                '1914 translation by H. Rackham\n' +
                '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"\n' +
                '\n' +
                'Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC\n' +
                '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."',
            userId: 'user-003',
            userName: 'Name = this user does not exist :P ',
            datePosted: 'Wed Jun 18 2020 19:15:30 GMT-0700 (Pacific Daylight Time)',
            rating: 5
        },
        {
            mediaType: 'book',
            id: 'book-003',
            text: 'meh',
            userId: 'user-004',
            userName: 'Name = this user does not actually exist :P ',
            datePosted: 'Wed Jun 18 2020 21:15:30 GMT-0700 (Pacific Daylight Time)',
            rating: undefined
        },
        {
            mediaType: 'book',
            id: 'book-003',
            text: 'ok',
            userId: 'user-005',
            userName: 'Name = this user does not actually exist :P ',
            datePosted: 'Wed Jun 20 2020 19:14:30 GMT-0700 (Pacific Daylight Time)',
            rating: undefined
        }
    ]
);

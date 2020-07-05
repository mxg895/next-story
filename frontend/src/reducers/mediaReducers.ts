import {ADD_REVIEW, DELETE_MEDIA_REVIEW, EDIT_REVIEW} from '../constants/mediaConstants';
import {MediaType} from '../constants/dataTypes';

const books = [{
    bookId: '000',
    genreIds: [],
    nextStoryTags: [],
    reviews: [{'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'}]
}, {
    bookId: '001',
    genreIds: [],
    nextStoryTags: [],
    reviews: [{'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'}]
}];

const movies = [{
    movieId: 'movie-001',
    nextStoryTags: [],
    reviews: [{text: '# Extremo truncos illo\n' +
            '\n' +
            '## Patrios quicquam\n' +
            '\n' +
            'Lorem markdownum superbum fecit certamina vestigia\n' +
            '[dextra](http://saxo-saevit.io/). Fuso putares facta: aerane piumque erras:\n' +
            'placavit ademptae dictis totis ieiuna a amplexa, serrae! Nam fit: accipite aures\n' +
            'violente, tuas mane te.\n' +
            '\n' +
            '> Super canescunt nimium, monstri, in nescit Pindusque mater latius nullis\n' +
            '> lassataque rarior habuit. Copia en venti. Visa est puraque sed formosa\n' +
            '> *addenda*, cum in et formae tenuit scilicet manusque; spectentque multa\n' +
            '> [coniugis](http://aeolonviri.org/) quiescet.\n' +
            '\n' +
            '*Omnia ebur* sustinet Vasta, ferebat sententia vestrumque, oculos est, Tigris\n' +
            '*me est* cacumine [cinctum](http://successudato.io/fulvadoctae) te iubet in?\n' +
            'Revocata morbo **et unde ritu** ferunt, sanus modum pretiosior carmine undis,\n' +
            'nec inquit arto per Samon territa proles! Perempto Oceani laetatur auxilium\n' +
            'tibi, **litus ab deos** Venus, cum Iuno: casas. Quid Iuppiter vires est\n' +
            'feriuntque ponentem satyri pasci, tantis.\n' +
            '\n' +
            'Vitiasse receptus satis, vulnerat esse ad prius. Ora quid imitamina, promissae\n' +
            'puerum proles sumptis circumdare, genitus. Bis aquarum, ora bracchia cinis que\n' +
            'adloquitur tandemque pars arcus dare tellus sine, proxima secuturo primo.\n' +
            'Pretiosior *ira* cuique petitam de unus. Patris tamen, mihi animus Cerealia\n' +
            'remansit, per profanis laetoque Lapithae scelus.\n' +
            '\n' +
            '## Ingrati harenae\n' +
            '\n' +
            'Rami hoc risitque, foramina; et nec illa est saltus. Mente pio coronat brevis et\n' +
            'sacra, tremit qua sceptroque. Et gerit atque, avidamque monte hominumque aera.\n' +
            '\n' +
            '    if (base_boolean <= scraping) {\n' +
            '        windows_horse(dma_key_docking, 5);\n' +
            '    } else {\n' +
            '        cron_white(vrmlMonitor - pci, marginPromCdn);\n' +
            '    }\n' +
            '    var nanometer = leaderboardParity;\n' +
            '    if (autoresponderIllegalName) {\n' +
            '        output += botnetNon;\n' +
            '        filePaper.boot_software = 2;\n' +
            '    } else {\n' +
            '        dayAbendDrop(mode.impression(gammaTypefaceAutoresponder, raw,\n' +
            '                kerning_output_protocol), osd_runtime_file, usernameE -\n' +
            '                donationwareScript);\n' +
            '        dual_powerpoint = pimUpFile * disk_nanometer;\n' +
            '        file_bespoke_record += pciWebNanometer;\n' +
            '    }\n' +
            '    web_rom_smm(telnet.ctpSourceKey(42), 2, desktop_zip);\n' +
            '    var sequence = mediaIsaReal(sli(isa, 3) - 5, boxSourceCapacity, 4 -\n' +
            '            namespace_us_cc + copyright_address_inkjet);\n' +
            '\n' +
            'Esse crines furtim sanguine, tigres nec [qui](http://www.unicusconataque.com/),\n' +
            'membris cernit *me*. Densetur fuit miracula Canentem lustrat. Ignota mille,\n' +
            'exiguis fortuna egressu; ite ventique Nelea aut secuta grando erat ira. Foliis\n' +
            'gratam Pylios nubes etiam firmo turbae, et vitio. Moles\n' +
            '[fit](http://nec.net/ita-valvis.html) tristis scopulum alta vigilans, unda\n' +
            'nefandos.\n' +
            '\n' +
            '- Nec dicitur spemque invenies iaculum\n' +
            '- Iners plena\n' +
            '- Quaeritur silvis\n' +
            '- Tororum passum colligit nox illis inclusum mentis\n' +
            '- Tu sint ait nomenque meque probas longus\n' +
            '- Sanguinis ratis differtis iubemur\n' +
            '\n' +
            'Est cuti o clara ululatus aerias narrat excussum Boeotia, correpto harenas.\n' +
            'Grandior in inscribit *pars* flumina differt, favilla facta, dixere? Altera\n' +
            'captus, et ora nympha inpositum tumulis telum officio numquam lingua invectae,\n' +
            'cornuaque Pergama! Purpureus generoso aliquid mea, litora, de iam scopulis te\n' +
            'auras solitumque manu rex ille superavit talia. Nisi accepisse, agentem\n' +
            'ceciderunt Denique vix ursa concidit hic.', userName: 'name0', userId: '000', datePosted: 'Wed Jun 16 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n' +
                    '\n' +
                    'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC\n' +
                    '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"\n' +
                    '\n' +
                    '1914 translation by H. Rackham\n' +
                    '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"\n' +
                    '\n' +
                    'Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC\n' +
                    '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."\n' +
                    '\n' +
                    '1914 translation by H. Rackham\n' +
                    '"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."', userName: 'name1', userId: '001', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'ok I guess', userName: 'name2', userId: '002', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'meh', userName: 'name3', userId: '003', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'wonderful', userName: 'name4', userId: '004', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'amazing!!', userName: 'name5', userId: '005', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'I liked the main characters', userName: 'name6', userId: '006', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'so-so', userName: 'name7', userId: '007', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'terrible movie', userName: 'name1', userId: '001', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'ok I guess', userName: 'name2', userId: '002', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'meh', userName: 'name3', userId: '003', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'wonderful', userName: 'name4', userId: '004', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'amazing!!', userName: 'name5', userId: '005', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'terrible movie', userName: 'name1', userId: '001', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'ok I guess', userName: 'name2', userId: '002', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'meh', userName: 'name3', userId: '003', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'wonderful', userName: 'name4', userId: '004', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'amazing!!', userName: 'name5', userId: '005', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'terrible movie', userName: 'name1', userId: '001', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'ok I guess', userName: 'name2', userId: '002', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'meh', userName: 'name3', userId: '003', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'wonderful', userName: 'name4', userId: '004', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'amazing!!', userName: 'name5', userId: '005', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'terrible movie', userName: 'name1', userId: '001', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'ok I guess', userName: 'name2', userId: '002', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'meh', userName: 'name3', userId: '003', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'wonderful', userName: 'name4', userId: '004', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'amazing!!', userName: 'name5', userId: '005', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'terrible movie', userName: 'name1', userId: '001', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'ok I guess', userName: 'name2', userId: '002', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'meh', userName: 'name3', userId: '003', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'wonderful', userName: 'name4', userId: '004', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'amazing!!', userName: 'name5', userId: '005', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'}]
}, {
    movieId: '001',
    nextStoryTags: [],
    reviews: [{text: '', userId: '', datePosted: ''},
            {text: '', userId: '', datePosted: ''},
            {text: '', userId: '', datePosted: ''}]
}];

const mediaReducer = (state = { movies: movies, books: books}, action: any) => {
    const mediaType: MediaType = action.mediaType;
    const mediaKey = mediaType === MediaType.movie ? 'movies' : 'books';
    const mediaId = mediaType === MediaType.movie ? 'movieId' : 'bookId';
    switch (action.type) {
        case EDIT_REVIEW:
            // let mediaNoEdit: any[] = [];
            // let mediaToEdit = {};
            // state[mediaKey].forEach((m: any) => {
            //     m[mediaId] !== action.mediaId ? mediaNoEdit.push(m) : mediaToEdit = m;
            // });
            // const editedReviewsList = (mediaToEdit as any)?.reviews.map((r: any) => {
            //     if (r.userId === action.userId) {
            //         return {
            //             userName: r.userName,
            //             text: action.reviewText,
            //             userId: action.userId,
            //             datePosted: action.datePosted
            //         };
            //     } else {
            //         return r;
            //     }
            // });
            // return {
            //     ...state,
            //     [mediaKey]: [
            //         ...mediaNoEdit,
            //         {
            //             ...mediaToEdit,
            //             reviews: editedReviewsList
            //         }
            //     ]
            // };
        case ADD_REVIEW:
            // let mediaNoAdd: any[] = [];
            // let mediaToAddReview = {};
            // state[mediaKey].forEach((m: any) => {
            //     m[mediaId] !== action.mediaId ? mediaNoAdd.push(m) : mediaToAddReview = m;
            // });
            // const addedReviewsList = [
            //     {
            //         userName: action.userName,
            //         text: action.reviewText,
            //         userId: action.userId,
            //         datePosted: action.datePosted
            //     },
            //     ...(mediaToAddReview as any).reviews];
            // return {
            //     ...state,
            //     [mediaKey]: [
            //         ...mediaNoAdd,
            //         {
            //             ...mediaToAddReview,
            //             reviews: addedReviewsList
            //         }
            //     ]
            // };
        case DELETE_MEDIA_REVIEW:
            // let otherMedia: any[] = [];
            // let mediaOfInterest = {};
            // state[mediaKey].forEach((m: any) => {
            //     m[mediaId] !== action.mediaId ? otherMedia.push(m) : mediaOfInterest = m;
            // });
            // const filteredReviewsList = (mediaOfInterest as any)?.reviews.filter((r: any) => {
            //     return r.userId !== action.userId;
            // });
            // return {
            //     ...state,
            //     [mediaKey]: [
            //         ...otherMedia,
            //         {
            //             ...mediaOfInterest,
            //             reviews: filteredReviewsList
            //         }
            //     ]
            // };
        default:
            return { ...state };
    }
};

export default mediaReducer;

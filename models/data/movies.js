import 'dotenv/config.js'
import '../../config/database.js'
import { Movies } from '../Movies.js'
import { ObjectId } from 'mongodb'

let movies = [
    {
        "name": "A STAR IS BORN",
        "description": "Seasoned musician Jackson Maine discovers -- and falls in love with -- struggling artist Ally. She has just about given up on her dream to make it big as a singer until Jackson coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jackson fights an ongoing battle with his own internal demons.",
        "date": "19-2-2019",
        "web_site": "HBO max",
        "photo": "https://m.media-amazon.com/images/M/MV5BNmE5ZmE3OGItNTdlNC00YmMxLWEzNjctYzAwOGQ5ODg0OTI0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89da'),
        "tomato": 80,
        "duration": "2h 15m" 
    },{
        "name": "JUST GO WITH IT",
        "description": "His heart recently broken, plastic surgeon Danny Maccabee (Adam Sandler) pretends to be married so he can enjoy future dates with no strings attached. His web of lies works, but when he meets Palmer (Brooklyn Decker) -- the gal of his dreams -- she resists involvement. Instead of coming clean, Danny enlists Katherine (Jennifer Aniston), his assistant, to pose as his soon-to-be-ex-wife. Instead of solving Danny's problems, the lies create more trouble.",
        "date": "11-2-2011",
        "web_site": "HBO max",
        "photo": "https://m.media-amazon.com/images/I/7111yBmWE+L._AC_SL1304_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89da'),
        "tomato": 59 ,
        "duration": "1h 57m" 
    },{
        "name": "FRIENDS WITH BENEFITS",
        "description": "Jamie (Mila Kunis) is a New York-based executive recruiter who entices Dylan (Justin Timberlake), an art director from Los Angeles, to take a job at the New York office of GQ magazine. Finding that they have much in common, the two become fast friends. Feeling jaded by a number of broken 6419c3ec2358f31419ad89das, Dylan and Jamie decide that they are ready to quit looking for true love and focus on having fun. However, complications unfold when the two best pals add sex to their relationship.",
        "date": "22-10-2011",
        "web_site": "HBO max",
        "photo": "https://m.media-amazon.com/images/I/71TEDOX+wIL._AC_SY679_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89da'),
        "tomato": 65 ,
        "duration": "1h 49m" 
    },{
        "name": "TWILIGHT",
        "description": "High-school student Bella Swan (Kristen Stewart), always a bit of a misfit, doesn't expect life to change much when she moves from sunny Arizona to rainy Washington state. Then she meets Edward Cullen (Robert Pattinson), a handsome but mysterious teen whose eyes seem to peer directly into her soul. Edward is a vampire whose family does not drink blood, and Bella, far from being frightened, enters into a dangerous 6419c3ec2358f31419ad89da with her immortal soulmate.",
        "date": "21-11-2008",
        "web_site": "Netflix",
        "photo": "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/c6e9ff2a95d2896b69a4b66bb592f82778bdd0ee63f34ad04948c081f5de0d72._RI_V_TTW_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89da'),
        "tomato": 72 ,
        "duration": "2h 2m" 
    },{
        "name": "TO ALL THE BOYS I'VE LOVED BEFORE",
        "description": "A girl who writes secret love letters to her crushes discovers that they were somehow sent out.",
        "date": "2018-08-17",
        "web_site": "Netflix",
        "photo": "https://m.media-amazon.com/images/M/MV5BMjQ3NjM5MTAzN15BMl5BanBnXkFtZTgwODQzMDAwNjM@._V1_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89da'),
        "tomato": 74,
        "duration": "1h 39m" 
      }
      ,{
        "name": "LA LA LAND",
        "description": "A jazz pianist and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
        "date": "2016-12-09",
        "site": "HBO max",
        "photo": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91jrKX9xjQL.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89da'),
        "tomato": 80,
        "duration": "2h 8m" 
      }
      ,{
        "name": "THREE STEPS ABOVE HEAVEN",
        "description": "A troubled boy falls in love with a good girl, and together they discover passion and true love.",
        "date": "2010-12-03",
        "site": "Star +",
        "photo": "https://m.media-amazon.com/images/M/MV5BNjQwM2Y3ODQtYjExMi00OGIwLWFhZWYtNDY0ZDM4ZTk1MzU1XkEyXkFqcGdeQXVyNjE5NTc2OTQ@._V1_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89da'),
        "tomato": 65,
        "duration": "1h 58m" 
      },
    {
        "name": "THE KISSING BOOTH",
        "description": "A high school student is forced to confront her secret crush at a kissing booth.",
        "date": "2018-05-11",
        "web_site": "Netflix",
        "category_id": new ObjectId('6419c3ec2358f31419ad89da'),
        "tomato": 23,
        "duration": "1h 45m",
        "photo": "https://m.media-amazon.com/images/M/MV5BNjQ0Mzk0OTE5MF5BMl5BanBnXkFtZTgwNDkyOTI0NTM@._V1_.jpg"
    },
    {
        "name": "ALWAYS BE MY MAYBE",
        "description": "Childhood sweethearts reunite after 15 years and realize they still have feelings for each other.",
        "date": "2019-05-31",
        "web_site": "Netflix",
        "category_id": new ObjectId('6419c3ec2358f31419ad89da'),
        "tomato": 89,
        "duration": "1h 42m",
        "photo": "https://m.media-amazon.com/images/M/MV5BMGM2NWFjYTctZjFiYy00YzIxLThhY2QtY2UxZTNmNjdjZTU0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    },{
        "name": "THE CONJURING",
        "description": "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
        "date": "2013-07-19",
        "web_site": "Netflix",
        "photo": "https://www.themoviedb.org/t/p/original/rICumoFSRzn4tJeaLvuI0HeE53p.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89db'),
        "tomato": 83,
        "duration": "1h 52m"
      },
      {
        "name": "A QUIET PLACE",
        "description": "A family is forced to live in silence while hiding from creatures that hunt by sound.",
        "date": "2018-04-06",
        "web_site": "Amazon Prime",
        "photo": "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89db'),
        "tomato": 95,
        "duration": "1h 30m"
      },
      {
        "name": "THE EXORCIST",
        "description": "When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.",
        "date": "1973-12-26",
        "web_site": "HBO Max",
        "photo": "https://m.media-amazon.com/images/M/MV5BYWFlZGY2NDktY2ZjOS00ZWNkLTg0ZDAtZDY4MTM1ODU4ZjljXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89db'),
        "tomato": 87,
        "duration": "2h 12m"
      },
      {
        "name": "THE BABADOOK",
        "description": "A single mother and her child fall into a deep well of paranoia when an eerie children's book titled \"Mister Babadook\" manifests in their home.",
        "date": "2014-05-22",
        "web_site": "Netflix",
        "photo": "https://m.media-amazon.com/images/M/MV5BMTk0NzMzODc2NF5BMl5BanBnXkFtZTgwOTYzNTM1MzE@._V1_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89db'),
        "tomato": 92,
        "duration": "1h 34m"
      },
    {
        "name": "IT",
        "description": "A group of bullied kids band together when a shapeshifting monster, taking the appearance of a clown, begins hunting children.",
        "date": "2017-08-9",
        "web_site": "HBO Max",
        "photo": "https://i.pinimg.com/originals/ac/03/a6/ac03a61c9f5f1214683b8919ba02ec1b.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89db'),
        "tomato": 86,
        "duration": "2h 15m"
    },
    {
        "name": "HEREDITARY",
        "description": "After the death of her mother, a woman and her family begin to experience terrifying supernatural occurrences.",
        "date": "2018-6-8",
        "web_site": "Amazon Prime",
        "photo": "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89db'),
        "tomato": 89,
        "duration": "2h 7m"
    },
    {
        "name": "MIDSOMMAR",
        "description": "A couple travels to Sweden to visit a rural hometown's fabled mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.",
        "date": "2019-07-03",
        "web_site": "Amazon Prime",
        "photo": "https://proyectonaschy.files.wordpress.com/2019/06/midsommar-poster.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89db'),
        "tomato": 83,
        "duration": "2h 27m"
    },{
        "name": "MY OCTOPUS TEACHER",
        "description": "A filmmaker forges an unusual friendship with an octopus living in a South African kelp forest, learning as the animal shares the mysteries of her world.",
        "date": "07-09-2020",
        "web_site": "Netflix",
        "photo": "https://cdn.cinematerial.com/p/297x/y1u0vmt0/my-octopus-teacher-south-african-movie-poster-md.jpg?v=1636456147",
        "category_id": new ObjectId('6419c3ec2358f31419ad89dc'),
        "tomato": 81,
        "duration": "1h 25m"
    },
    {
        "name": "THE SOCIAL DILEMMA",
        "description": "This documentary-drama hybrid explores the dangerous human impact of social networking, with tech experts sounding the alarm on their own creations.",
        "date": "09-09-2020",
        "web_site": "Netflix",
        "photo": "https://m.media-amazon.com/images/M/MV5BZGVjYjEzNmItMzc0My00Y2UyLWFlZjEtNzY5YTE4YTg2OGJlXkEyXkFqcGdeQXVyMjc5NDYwNTU@._V1_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89dc'),
        "tomato": 76,
        "duration": "1h 34m"
    },
    {
        "name": "THE IVORY GAME",
        "description": "Filmmakers infiltrate the corrupt global network of ivory trafficking, exposing poachers and dealers as African elephants edge closer to extinction.",
        "date": "04-11-2016",
        "web_site": "Netflix",
        "photo": "https://m.media-amazon.com/images/M/MV5BNTY4OTQ3NDIwMF5BMl5BanBnXkFtZTgwOTk4MzkzMDI@._V1_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89dc'),
        "tomato": 82,
        "duration": "1h 52m"
    },
    {
        "name": "AMERICAN MURDER: THE FAMILY NEXT DOOR",
        "description": "Using raw, firsthand footage, this documentary examines the disappearance of Shanann Watts and her children, and the terrible events that followed.",
        "date": "30-09-2020",
        "web_site": "Netflix",
        "photo": "https://m.media-amazon.com/images/M/MV5BZjNkOWZlMWYtYmU1Ny00M2ZlLTkzZWUtM2RkMjU0MjM5NmEwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89dc'),
        "tomato": 80,
        "duration": "1h 23m"
    },
    {
        "name": "THE LAST DANCE",
        "description": "This docuseries chronicles the rise of superstar Michael Jordan and the 1990s Chicago Bulls, with unaired footage from an unforgettable 1997-98 season.",
        "date": "19/04/2020",
        "web_site": "Netflix",
        "photo": "https://www.themoviedb.org/t/p/original/oVf4xGGbDtwVHiKn8uTuSriY7PH.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89dc'),
        "tomato": 90,
        "duration": "9 episodes, 45-60 minutes each"
    }
    ,{
        "name": "Fyre",
        "description": "An exclusive behind the scenes look at the infamous unraveling of the Fyre music festival.",
        "date": "14-01-2019",
        "web_site": "Netflix",
        "photo": "https://pics.filmaffinity.com/Fyre-648384569-large.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89dc'),
        "tomato": 73,
        "duration": "1h 37m"
      },
      {
        "name": "American Factory",
        "description": "In post-industrial Ohio, a Chinese billionaire opens a new factory in the husk of an abandoned General Motors plant, hiring two thousand blue-collar Americans.",
        "date": "21-08-2019",
        "web_site": "Netflix",
        "photo": "https://pics.filmaffinity.com/American_Factory-977540552-large.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89dc'),
        "tomato": 96,
        "duration": "1h 50m"
      },
      {
        "name": "Crip Camp",
        "description": "Down the road from Woodstock, a revolution blossomed at a summer camp for teens with disabilities, transforming their lives and igniting a landmark movement.",
        "date": "25-03-2020",
        "web_site": "Netflix",
        "photo": "https://m.media-amazon.com/images/M/MV5BMTNlMDI3MGYtY2FmNy00ZDdmLTkzZDMtMDg1MWYyM2M4YzQxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89dc'),
        "tomato": 95,
        "duration": "1h 48m"
      },
      {
        "name": "Disclosure",
        "description": "Leading trans creatives and thinkers share heartfelt perspectives and analysis about Hollywood's impact on the trans community.",
        "date": "19-06-2020",
        "web_site": "Netflix",
        "photo": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41vJ73KVoTL._AC_UF894,1000_QL80_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89dc'),
        "tomato": 98,
        "duration": "1h 47m"
      },
      {
        "name": "JUNGLE CRUISE",
        "description": "Join fan favorites Dwayne Johnson and Emily Blunt for the adventure of a lifetime on Disney’s Jungle Cruise, a rollicking thrill-ride down the Amazon with wisecracking skipper Frank Wolff and intrepid researcher Dr. Lily Houghton. Lily travels from London, England to the Amazon jungle and enlists Frank’s questionable services to guide her downriver on La Quila—his ramshackle-but-charming boat. Lily is determined to uncover an ancient tree with unparalleled healing abilities—possessing the power to change the future of medicine. Thrust on this epic quest together, the unlikely duo encounters innumerable dangers and supernatural forces, all lurking in the deceptive beauty of the lush rainforest. But as the secrets of the lost tree unfold, the stakes reach even higher for Lily and Frank and their fate—and mankind’s—hangs in the balance.",
        "date": "30-07-2021",
        "web_site":"Disney+",
        "photo": "https://www.themoviedb.org/t/p/original/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89dd'),
        "tomato": 88,
        "duration":"2h 7m"
    },
    {
        "name": "THE TOMORROW WAR",
        "description": "In The Tomorrow War, the world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester (Chris Pratt). Determined to save the world for his young daughter, Dan teams up with a brilliant scientist (Yvonne Strahovski) and his estranged father (J.K. Simmons) in a desperate quest to rewrite the fate of the planet.",
        "date": "02-07-2021",
        "web_site":"Amazon Prime",
        "photo": "https://www.themoviedb.org/t/p/original/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89dd'),
        "tomato": 52,
        "duration": "2h 20m"
    },
    {
        "name": "THE TAKING OF PELHAM 123",
        "description": "In this remake of the classic thriller, a group of hijackers take over a New York City subway train and demand a ransom. It's up to a subway dispatcher to negotiate with the criminals and save the passengers.",
        "date": "12-06-2009",
        "web_site":"Amazon Prime",
        "photo": "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/9317be16967906a7f92f03a2e91b5428ce5cc000d5c33bb7e444d1bdc08ccbaa._RI_V_TTW_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89dd'),
        "tomato": 60,
        "duration": "1h 46m"
    },
    {
        "name": "MISSION: IMPOSSIBLE - FALLOUT",
        "description": "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.",
        "date": "27-07-2018",
        "web_site":"Netflix",
        "photo":"https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89dd'),
        "tomato": 97,
        "duration": "2h 28m"
    },
    {
        "name": "DREDD",
        "description": "In a violent, futuristic city where the police have the authority to act as judge, jury, and executioner, Judge Dredd (Karl Urban) teams up with a rookie cop to take down a dangerous drug lord.",
        "date": "21-09-2012",
        "web_site":"HBO max",
        "photo": "https://pics.filmaffinity.com/Dredd-134517825-large.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89dd'),
        "tomato": 72,
        "duration": "1h 36m"
    },
    {
        "name": "TOP GUN: MAVERICK",
        "description": "Maverick, who has 30 years of service, is now an instructor for military pilots. One last mission, one final sacrifice, forces this master of the skies to face the open wounds of the past and his deepest fears.",
        "date": "22-05-2022",
        "web_site":"Star+",
        "photo":"https://pics.filmaffinity.com/Top_Gun_Maverick-537976462-large.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89dd'),
        "tomato": 99,
        "duration": "2h 11m"
    },
    {
        "name": "JOKER",
        "description": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
        "date": "04-10-2019",
        "web_site":"HBO max",
        "photo": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89dd'),
        "tomato": 88,
        "duration": "2h 2m"
    },
    {
        "name": "OLD GUARD",
        "description": "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",
        "date": "10-07-2020",
        "web_site":"Netflix",
        "photo": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89dd'),
        "tomato": 70,
        "duration": "2h 5m"
    },
    {
        "name": "KILL BILL: VOL. 1",
        "description": "A former assassin, known only as The Bride, wakes up from a coma four years after her ex-boss tried to kill her on her wedding day. She sets out to get revenge on the people who betrayed her, starting with her former boss and his team of deadly assassins.",
        "date": "10-10-2003",
        "web_site":"Amazon Prime",
        "photo": "https://es.web.img3.acsta.net/pictures/14/05/07/12/38/160972.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89dd'),
        "tomato": 85,
        "duration": "1h 51m"
    },
    {
        "name": "THE A-TEAM",
        "description": "In this adaptation of the classic TV show, a team of former special forces soldiers are framed for a crime they didn't commit. They must use their skills and wits to clear their names and bring the real criminals to justice.",
        "date": "11-06-2010",
        "web_site":"Amazon Prime",
        "photo": "https://m.media-amazon.com/images/I/5136mzH7uWL._AC_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89dd'),
        "tomato": 47,
        "duration": "60m"
    },
    {
        "name": "SPIRITED AWAY",
        "description": "Chihiro and her parents stumble upon a seemingly abandoned amusement park. After her parents are turned into pigs, Chihiro must navigate this strange world and find a way to free them and return to the human world.",
        "date": "20-07-2001",
        "web_site":"Netflix",
        "photo": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89de'),
        "tomato": 97,
        "duration": "2h 5m"
    },
    {
        "name": "MY NEIGHBOR TOTORO",
        "description": "Two young sisters move to the countryside with their father and encounter magical creatures, including the friendly forest spirit Totoro.",
        "date": "16-04-1988",
        "web_site":"HBO max",
        "photo": "https://m.media-amazon.com/images/I/A10mcxetgHL.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89de'),
        "tomato": 94,
        "duration": "1h 26m"
    },
    {
        "name": "YOUR NAME",
        "description": "Two high school students, a boy living in Tokyo and a girl living in the countryside, begin to swap bodies at random. They must navigate this strange phenomenon and unravel the mystery behind it.",
        "date": "26-08-2016",
        "web_site":"Amazon Prime",
        "photo": "https://m.media-amazon.com/images/I/71-WBN3FCBL._AC_SY879_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89de'),
        "tomato": 97,
        "duration": "1h 52m"
    },
    {
        "name": "PRINCESS MONONOKE",
        "description": "In feudal Japan, a young warrior named Ashitaka becomes embroiled in a conflict between the forest gods and a mining town that threatens to destroy their home. He meets San, a human girl raised by wolves who is fighting on behalf of the gods.",
        "date": "12-07-1997",
        "web_site":"Netflix",
        "photo": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c6/Princess_Mononoke.jpg/revision/latest?cb=20220409212252",
        "category_id": new ObjectId('6419c3ec2358f31419ad89de'),
        "tomato": 93,
        "duration": "2h 13m"
    },
    {
        "name": "AKIRA",
        "description": "In a dystopian future Tokyo, a biker gang member named Tetsuo gains incredible powers after a motorcycle accident. His friend Kaneda must confront him and stop him before he destroys the city.",
        "date": "16-07-1988",
        "web_site":"Netflix",
        "photo": "https://m.media-amazon.com/images/I/913iYTmWPwL.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89de'),
        "tomato": 90,
        "duration": "2h 4m"
    },
    {
        "name": "KIKI'S DELIVERY SERVICE",
        "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
        "date": "29-07-1989",
        "web_site":"Netflix",
        "photo": "https://m.media-amazon.com/images/I/71X9gLpKc1L._AC_SL1500_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89de'),
        "tomato": 96,
        "duration": "1h 42m"
    },
    {
        "name": "RAYA AND THE LAST DRAGON",
        "description": "In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.",
        "date": "05-03-2021",
        "web_site":"Disney+",
        "photo": "https://m.media-amazon.com/images/I/714pWGiJn1L._AC_SL1000_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89de'),
        "tomato": 94,
        "duration": "1h 47m"
    },
    {
        "name": "THE LEGO MOVIE",
        "description": "An ordinary LEGO construction worker, thought to be the prophesied as 'special', is recruited to join a quest to stop an evil tyrant from gluing the LEGO universe into eternal stasis.",
        "date": "07-02-2014",
        "web_site":"Amazon Prime",
        "photo": "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89de'),
        "tomato": 85,
        "duration": "1h 40m"
    },
    {
        "name": "INSIDE OUT",
        "description": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
        "date": "18-06-2015",
        "web_site": "Disney+",
        "photo": "https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89de'),
        "tomato": 88,
        "duration": "1h 35m"
    },
    {
        "name": "A SILENT VOICE",
        "description": "A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away. Years later, he sets off on a path for redemption.",
        "date": "17-09-2016",
        "web_site":"Netflix",
        "photo": "https://m.media-amazon.com/images/M/MV5BMjc3OTVhYzItYmY2ZS00YjNmLTk2MmMtNDI0NDBkNTEwMmY3XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89de'),
        "tomato": 95,
        "duration": "2h 9m"
    },
    {
        "name": "MRS. DOUBTFIRE",
        "description": "After a bitter divorce, an actor disguises himself as a female housekeeper to spend time with his children held in custody by his former wife.",
        "date": "24-11-1993",
        "web_site": "Disney+",
        "photo": "https://images.justwatch.com/poster/8722630/s592/mrs-doubtfire",
        "category_id": new ObjectId('6419c3ec2358f31419ad89df'),
        "tomato": 71,
        "duration": "2h 5m"
    },
    {
        "name": "TALLADEGA NIGHTS: THE BALLAD OF RICKY BOBBY",
        "description": "Number one NASCAR driver Ricky Bobby stays atop the heap thanks to a pact with his best friend and teammate, Cal Naughton, Jr. But when a French Formula One driver makes his way up the ladder, Ricky Bobby's talent and devotion are put to the test.",
        "date": "04-08-2006",
        "web_site": "Netflix",
        "photo": "https://m.media-amazon.com/images/I/91yzZRen9rL._RI_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89df'),
        "tomato": 72,
        "duration": "1h 48m"
    },
    {
        "name": "SUPERBAD",
        "description": "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
        "date": "17-08-2007",
        "web_site": "Amazon Prime",
        "photo": "https://www.amazon.com/Superbad-Jonah-Hill/dp/B0010R08PO",
        "category_id": new ObjectId('6419c3ec2358f31419ad89df'),
        "tomato": 88,
        "duration": "1h 58m"
    },
    {
        "name": "MEAN GIRLS",
        "description": "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
        "date": "30-04-2004",
        "web_site": "Paramount+",
        "photo": "https://www.tvguide.com/a/img/catalog/provider/1/2/1-7235822187.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89df'),
        "tomato": 84,
        "duration": "1h 37m"
    },
    {
        "name": "LITTLE MISS SUNSHINE",
        "description": "A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.",
        "date": "18-08-2006",
        "web_site": "Amazon Prime",
        "photo": "https://cdn.playpilot.tech/fc490ef83d4a11ed83ac0a58a9feac02/src/img?optimizer=image&quality=75&width=320&aspect_ratio=2%3A3",
        "category_id": new ObjectId('6419c3ec2358f31419ad89df'),
        "tomato": 91,
        "duration": "1h 42m"
    },
    {
        "name": "THE HANGOVER",
        "description": "Three groomsmen wake up in Las Vegas after a wild bachelor party and can't remember a thing--not even where they left the groom-to-be.",
        "date": "05-06-2009",
        "web_site": "HBO Max",
        "photo": "https://m.media-amazon.com/images/I/91G9Qoi1ytL._RI_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89df'),
        "tomato": 78,
        "duration": "1h 40m"
    },
    {
        "name": "THE FRENCH DISPATCH",
        "description": "A love letter to journalists set in an outpost of an American newspaper in a fictional 20th-century French city that brings to life a collection of stories published in The French Dispatch Magazine.",
        "date": "22-10-2021",
        "web_site":"Disney+",
        "photo":"https://m.media-amazon.com/images/M/MV5BNmQxZTNiODYtNzBhYy00MzVlLWJlN2UtNTc4YWZjMDIwMmEzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
        "category_id":new ObjectId('6419c3ec2358f31419ad89df'),
        "tomato": 88,
        "duration": "1h 48m"
    },
    {
        "name": "BORAT",
        "description": "Kazakh journalist Borat Sagdiyev travels to America to make a documentary. As he zigzags across the nation, Borat meets real people in real situations with hysterical consequences.",
        "date": "03-11-2006",
        "web_site": "Amazon Prime",
        "photo": "https://m.media-amazon.com/images/I/711gE287JiL._RI_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89df'),
        "tomato": 91,
        "duration": "1h 24m"
    },
    {
        "name": "COMING 2 AMERICA",
        "description": "The African monarch Akeem learns he has a long-lost son in the United States and must return to America to meet this unexpected heir and build a relationship with his son.",
        "date": "05-03-2021",
        "web_site":"Amazon Prime",
        "photo":"https://images2.vudu.com/poster2/140064-338",
        "category_id":new ObjectId('6419c3ec2358f31419ad89df'),
        "tomato": 49,
        "duration": "1h 50m"
    },
    {
        "name": "DEADPOOL 2",
        "description": "An introverted teenage girl tries to survive the last week of her disastrous eighth-grade year before leaving to start high school.",
        "date": "13-07-2018",
        "web_site": "Star+",
        "photo": "https://lumiere-a.akamaihd.net/v1/images/d_deadpool2_rebrand_poster_01_final_aff09686.png",
        "category_id": new ObjectId('6419c3ec2358f31419ad89df'),
        "tomato": 99,
        "duration": "1h 33m"
    },
    {
        "name": "THE SHAPE OF WATER",
        "description": "In a 1960s research facility, a mute janitor forms a relationship with an aquatic creature.",
        "date": "08-12-2017",
        "web_site": "Disney+",
        "photo": "https://jdbyrne.files.wordpress.com/2018/01/shapeofwater.jpg?w=640",
        "category_id": new ObjectId('6419c3ec2358f31419ad89e0'),
        "tomato": 91,
        "duration": "2h 3m"
    },
    {
        "name": "THE GODFATHER",
        "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "date": "24-03-1972",
        "web_site": "Paramount+",
        "photo": "https://m.media-amazon.com/images/I/714ZOEiVNtL._RI_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89e0'),
        "tomato": 98,
        "duration": "2h 58m"
    },
    {
        "name": "THE TRUMAN SHOW",
        "description": "An insurance salesman discovers his whole life is actually a reality TV show.",
        "date": "05-06-1998",
        "web_site": "Netflix",
        "photo": "https://images.justwatch.com/poster/8724030/s592/el-show-de-truman",
        "category_id": new ObjectId('6419c3ec2358f31419ad89e0'),
        "tomato": 95,
        "duration": "1h 43m"
    },
    {
        "name": "SCHINDLER'S LIST",
        "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        "date": "30-11-1993",
        "web_site": "Netflix",
        "photo": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89e0'),
        "tomato": 97,
        "duration": "3h 15m"
    },
    {
        "name": "THE SHAWSHANK REDEMPTION",
        "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "date": "14-10-1994",
        "web_site": "HBO Max",
        "photo": "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/9964546b0ba1f6e14a6045e34b341f8ca2a3569752c5afed95b89682fcde1a68._RI_V_TTW_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89e0'),
        "tomato": 91,
        "duration": "2h 22m"
    },
    {
        "name": "12 YEARS A SLAVE",
        "description": "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
        "date": "08-11-2013",
        "web_site": "HBO Max",
        "photo": "https://m.media-amazon.com/images/I/51idlN9hsCL._AC_UF350,350_QL50_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89e0'),
        "tomato": 95,
        "duration": "2h 14m"
    },
    {
        "name": "THE PIANIST",
        "description": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
        "date": "27-09-2002",
        "web_site": "Netflix",
        "photo": "https://m.media-amazon.com/images/I/51NwgyZA8nL._RI_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89e0'),
        "tomato": 95,
        "duration": "2h 30m"
    },
    {
        "name": "NOAH",
        "description": "After visions of an apocalyptic deluge, Noah, the world's only righteous man, is chosen to undertake a divine mission to build a massive ark to save his family and all of creation from the impending cataclysm.",
        "date": "28-03-2014",
        "web_site": "Amazon Prime",
        "photo": "https://images.sr.roku.com/idType/roku/context/global/id/623989026ff857249f43ff223bfa8759/images/gracenote/assets/p9957455_v_v8_am.jpg/magic/396x0/filters:quality(70)",
        "category_id": new ObjectId('6419c3ec2358f31419ad89e0'),
        "tomato": 72,
        "duration": "2h 18m"
    },
    {
        "name": "THE REVENANT",
        "description": "In the 1820s, a fur trapper battles for survival to exact retribution against a ruthless mercenary who left him for dead after he was mauled by a bear and robbed of everything he had.",
        "date": "08-01-2016",
        "web_site": "HBO Max",
        "photo": "https://m.media-amazon.com/images/I/A1SPwRWPZtL._RI_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89e0'),
        "tomato": 78,
        "duration": "2h 36m"
    },
    {
        "name": "THE GREEN MILE",
        "description": "In the 1930s, a death row corrections officer develops a unique relationship with one of the inmates he oversees, who possesses a mysterious supernatural ability.",
        "date": "10-12-1999",
        "web_site": "Amazon Prime",
        "photo": "https://m.media-amazon.com/images/I/815sDh2PH5L._RI_.jpg",
        "category_id": new ObjectId('6419c3ec2358f31419ad89e0'),
        "tomato": 85,
        "duration": "3h 9m"
    }]

Movies.insertMany(movies)
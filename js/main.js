const data = [
    {
        name : "Black Widow",
        discription : "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
        rating : "6.6",
        posterUrl : "./Resources/poster/blackWidow.jpg",
        infoUrl : "https://www.imdb.com/title/tt3480822/",
        watchUrl : "https://www.hotstar.com/in/movies/black-widow/1260067485/",
        trailerUrl : "https://www.youtube.com/embed/ybji16u608U?si=awyiwG1_oMSiyE8z",
        backgroundUrl : "./Resources/images/blackWidowBG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Thor: Love And Thunder",
        discription : "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
        rating : "6.2",
        posterUrl : "./Resources/poster/thor4.jpg",
        infoUrl : "https://www.imdb.com/title/tt10648342/",
        watchUrl : "https://www.primevideo.com/detail/0NH1IXGP1Q3KPHFFI00DRHOR4I/",
        trailerUrl : "https://www.youtube.com/embed/Go8nTmfrQd8?si=LGUDj83f8pxtT9F0",
        backgroundUrl : "./Resources/images/thor4BG.webp",
        movie : true,
        serie : false,
    },
    {
        name : "Shang-Chi",
        discription : "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
        rating : "7.3",
        posterUrl : "./Resources/poster/shangchi.jpg",
        infoUrl : "https://www.imdb.com/title/tt9376612/",
        watchUrl : "https://www.primevideo.com/detail/0QCSS9DHQKJA6633OYJ9YY3WQA/",
        trailerUrl : "https://www.youtube.com/embed/8YjFbMbfXaQ?si=aSGZwaYFHId1-D7w",
        backgroundUrl : "./Resources/images/shangchiBG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Iron Man",
        discription : "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        rating : "7.9",
        posterUrl : "./Resources/poster/ironMan2008.jpg",
        infoUrl : "https://www.imdb.com/title/tt0371746/",
        watchUrl : "https://www.hotstar.com/in/movies/iron-man/1660000038/",
        trailerUrl : "https://www.youtube.com/embed/8ugaeA-nMTc?si=_e8hkEjkSZVnLKdK",
        backgroundUrl : "./Resources/images/ironManBG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Incredible Hulk",
        discription : "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
        rating : "6.6",
        posterUrl : "./Resources/poster/incredibleHulk2008.jpg",
        infoUrl : "https://www.imdb.com/title/tt0800080/",
        watchUrl : "https://www.hotstar.com/in/movies/the-incredible-hulk/1000046231/",
        trailerUrl : "https://www.youtube.com/embed/xbqNb2PFKKA?si=vRmTNEU6E-jXawRx",
        backgroundUrl : "./Resources/images/hulkBG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Iron Man 2",
        discription : "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
        rating : "6.9",
        posterUrl : "./Resources/poster/ironMan2.jpg",
        infoUrl : "https://www.imdb.com/title/tt1228705/",
        watchUrl : "https://www.hotstar.com/in/movies/iron-man-2/1660000039/",
        trailerUrl : "https://www.youtube.com/embed/BoohRoVA9WQ?si=uJJy3lFrDcIQxjgA",
        backgroundUrl : "./Resources/images/ironMan2BG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Thor",
        discription : "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
        rating : "7.0",
        posterUrl : "./Resources/poster/thor1.jpg",
        infoUrl : "https://www.imdb.com/title/tt0800369/",
        watchUrl : "https://www.hotstar.com/in/movies/thor/1660000044/",
        trailerUrl : "https://www.youtube.com/embed/JOddp-nlNvQ?si=BmxcgEHOn-rBx5-N",
        backgroundUrl : "./Resources/images/thor1BG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Captain America",
        discription : 'Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a warmonger and a terrorist organization.',
        rating : "6.9",
        posterUrl : "./Resources/poster/cap1.jpg",
        infoUrl : "https://www.imdb.com/title/tt0458339/",
        watchUrl : "https://www.hotstar.com/in/movies/captain-america-the-first-avenger/1660000034/",
        trailerUrl : "https://www.youtube.com/embed/JerVrbLldXw?si=ZcxeOCXg0XrNCiFG",
        backgroundUrl : "./Resources/images/cap1BG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Avengers",
        discription : "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        rating : "8.0",
        posterUrl : "./Resources/poster/avengers.jpg",
        infoUrl : "https://www.imdb.com/title/tt0848228/",
        watchUrl : "https://www.hotstar.com/in/movies/marvels-the-avengers/1660000015/",
        trailerUrl : "https://www.youtube.com/embed/eOrNdBpGMv8?si=qVTowlByLMST1MvV",
        backgroundUrl : "./Resources/images/avengers1BG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Iron Man 3",
        discription : "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
        rating : "7.1",
        posterUrl : "./Resources/poster/ironMan3.jpg",
        infoUrl : "https://www.imdb.com/title/tt1300854/",
        watchUrl : "https://www.hotstar.com/in/movies/iron-man-3/1660000042",
        trailerUrl : "https://www.youtube.com/embed/f_h95mEd4TI?si=fz5VWhrWeEZvIuC-",
        backgroundUrl : "./Resources/images/ironMan3BG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Thor 2: The Dark World",
        discription : "When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.",
        rating : "6.7",
        posterUrl : "./Resources/poster/thor2.jpg",
        infoUrl : "https://www.imdb.com/title/tt1981115/",
        watchUrl : "https://www.hotstar.com/in/movies/thor-the-dark-world/1260018142",
        trailerUrl : "https://www.youtube.com/embed/npvJ9FTgZbM?si=8NSoY9AoC5hHtpNm",
        backgroundUrl : "./Resources/images/thor2BG.webp",
        movie : true,
        serie : false,
    },
    {
        name : "Captain America 2",
        discription : "The Winter Soldier: As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
        rating : "7.7",
        posterUrl : "./Resources/poster/cap2.jpg",
        infoUrl : "https://www.imdb.com/title/tt1843866/",
        watchUrl : "https://www.hotstar.com/in/movies/captain-america-the-winter-soldier/1260016410/",
        trailerUrl : "https://www.youtube.com/embed/7SlILk2WMTI?si=TIY11JYEF1AZxHv4",
        backgroundUrl : "./Resources/images/cap2BG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Guardians of the Galaxy",
        discription : "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
        rating : "8.0",
        posterUrl : "./Resources/poster/guardiansOfGalaxy.jpg",
        infoUrl : "https://www.imdb.com/title/tt2015381/",
        watchUrl : "https://www.hotstar.com/in/movies/guardians-of-the-galaxy/1260018294",
        trailerUrl : "https://www.youtube.com/embed/d96cjJhvlMA?si=jWNtUlyy9kWC9Vn_",
        backgroundUrl : "./Resources/images/gogBG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Avengers: Age of Ultron",
        discription : "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
        rating : "7.3",
        posterUrl : "./Resources/poster/avengers2.jpg",
        infoUrl : "https://www.imdb.com/title/tt2395427/",
        watchUrl : "https://www.hotstar.com/in/movies/marvels-avengers-age-of-ultron/1260018315/",
        trailerUrl : "https://www.youtube.com/embed/tmeOjFno6Do?si=YgDhHd0eqUWIQa5m",
        backgroundUrl : "./Resources/images/avengers2BG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Ant-Man",
        discription : "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, pull off a plan that will save the world.",
        rating : "7.2",
        posterUrl : "./Resources/poster/antMan.jpg",
        infoUrl : "https://www.imdb.com/title/tt0478970/",
        watchUrl : "https://www.hotstar.com/in/movies/antman/1260018141/",
        trailerUrl : "https://www.youtube.com/embed/pWdKf3MneyI?si=7m5syorRXzwkMBaP",
        backgroundUrl : "./Resources/images/antManBG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Captain America: Civil War",
        discription : "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
        rating : "7.8",
        posterUrl : "./Resources/poster/cap3.jpg",
        infoUrl : "https://www.imdb.com/title/tt3498820/",
        watchUrl : "https://www.hotstar.com/in/movies/captain-america-civil-war/1260016768/",
        trailerUrl : "https://www.youtube.com/embed/43NWzay3W4s?si=3977rfjA50FVCR60",
        backgroundUrl : "./Resources/images/cap3BG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Doctor Strange",
        discription : "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
        rating : "7.5",
        posterUrl : "./Resources/poster/doctorStrange.jpg",
        infoUrl : "https://www.imdb.com/title/tt1211837/",
        watchUrl : "https://www.hotstar.com/in/movies/doctor-strange/1260018179/",
        trailerUrl : "https://www.youtube.com/embed/h7gvFravm4A?si=vGxWqjqSNPepaYs-",
        backgroundUrl : "./Resources/images/doctorStrangeBG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Guardians of the Galaxy 2",
        discription : "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
        rating : "7.6",
        posterUrl : "./Resources/poster/galaxy2.jpg",
        infoUrl : "https://www.imdb.com/title/tt3896198/",
        watchUrl : "https://www.hotstar.com/in/movies/guardians-of-the-galaxy-vol-2/1260018295/",
        trailerUrl : "https://www.youtube.com/embed/wUn05hdkhjM?si=Kb7KQ4kp3A9JYqvg",
        backgroundUrl : "./Resources/images/gog2BG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Thor 3: Ragnarok",
        discription : "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
        rating : "7.9",
        posterUrl : "./Resources/poster/thor3.jpg",
        infoUrl : "https://www.imdb.com/title/tt3501632/",
        watchUrl : "https://www.hotstar.com/in/movies/thor-ragnarok/1660010577/",
        trailerUrl : "https://www.youtube.com/embed/ue80QwXMRHg?si=fL0etet2-hukGfdq",
        backgroundUrl : "./Resources/images/thor3BG.webp",
        movie : true,
        serie : false,
    },
    {
        name : "Black Panther",
        discription : "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
        rating : "7.3",
        posterUrl : "./Resources/poster/blackPanther1.jpg",
        infoUrl : "https://www.imdb.com/title/tt1825683/",
        watchUrl : "https://www.primevideo.com/detail/0FO6G96HGKLFV51UGVQGO7WNWS/",
        trailerUrl : "https://www.youtube.com/embed/xjDjIWPwcPU?si=rWgeWfqSk68nrFRh",
        backgroundUrl : "./Resources/images/blackPanther1BG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Avengers: Infinity War",
        discription : "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        rating : "8.4",
        posterUrl : "./Resources/poster/avengers3.jpg",
        infoUrl : "https://www.imdb.com/title/tt4154756/",
        watchUrl : "https://www.hotstar.com/in/movies/avengers-infinity-war/1660010677",
        trailerUrl : "https://www.youtube.com/embed/6ZfuNTqbHE8?si=5Mc_s98KJJuDd0m6",
        backgroundUrl : "./Resources/images/avengers3BG.webp",
        movie : true,
        serie : false,
    },
    {
        name : "Captain Marvel",
        discription : "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
        rating : "6.8",
        posterUrl : "./Resources/poster/captainMarvel.jpg",
        infoUrl : "https://www.imdb.com/title/tt4154664/",
        watchUrl : "https://www.hotstar.com/in/movies/captain-marvel/1260014878/",
        trailerUrl : "https://www.youtube.com/embed/Z1BCujX3pw8?si=FSEXmTT0YhOOXeMp",
        backgroundUrl : "./Resources/images/captainMarvelBG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Avengers': Endgame",
        discription : "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        rating : "8.4",
        posterUrl : "./Resources/poster/avengers4.jpg",
        infoUrl : "https://www.imdb.com/title/tt4154796/",
        watchUrl : "https://www.primevideo.com/detail/0OI091IRNAIWL6HY536UZ1JA6O/",
        trailerUrl : "https://www.youtube.com/embed/LPhqL4DqzBg?si=Q3Tz9KeP9mbl4pAw",
        backgroundUrl : "./Resources/images/avengers4BG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Doctor Strange: MoM",
        discription : "Multiverse of Madness: Doctor Strange teams up with a mysterious teenage girl who can travel across multiverses, to battle other-universe versions of himself which threaten to wipe out the multiverse. They seek help from the Scarlet Witch, Wong and others.",
        rating : "6.9",
        posterUrl : "./Resources/poster/doctorStrange2.jpg",
        infoUrl : "https://www.imdb.com/title/tt9419884/",
        watchUrl : "https://www.hotstar.com/in/movies/doctor-strange-in-the-multiverse-of-madness/1260103761/",
        trailerUrl : "https://www.youtube.com/embed/aWzlQ2N6qqg?si=sl_wHju8uAjkperj",
        backgroundUrl : "./Resources/images/doctorStrange2BG.png",
        movie : true,
        serie : false,
    },
    {
        name : "Ant-Man and the Wasp",
        discription : "As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.",
        rating : "7.0",
        posterUrl : "./Resources/poster/antMan2.jpg",
        infoUrl : "https://www.imdb.com/title/tt5095030/",
        watchUrl : "https://www.hotstar.com/in/movies/antman-and-the-wasp/1660010696/",
        trailerUrl : "https://www.youtube.com/embed/8_rTIAOohas?si=LtRqSg95fPUUgtf3",
        backgroundUrl : "./Resources/images/antMan2BG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Spider-Man:Far from Home",
        discription : "Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins.",
        rating : "7.4",
        posterUrl : "./Resources/poster/spiderman2.jpg",
        infoUrl : "https://www.imdb.com/title/tt6320628/",
        watchUrl : "https://www.netflix.com/in/title/81055822",
        trailerUrl : "https://www.youtube.com/embed/Nt9L1jCKGnE?si=0edWrItSGec_v8Ey",
        backgroundUrl : "./Resources/images/spiderman2BG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Spider-Man: Homecoming",
        discription : "Peter Parker tries to stop Adrian 'The Vulture' Toomes from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student.",
        rating : "7.4",
        posterUrl : "./Resources/poster/spiderman1.jpg",
        infoUrl : "https://www.imdb.com/title/tt2250912/",
        watchUrl : "https://www.netflix.com/in/title/80166369/",
        trailerUrl : "https://www.youtube.com/embed/rk-dF1lIbIg?si=fl0CmTBXnBexl_5R",
        backgroundUrl : "./Resources/images/spiderman1BG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Spider-Man:No Way Home",
        discription : "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
        rating : "8.2",
        posterUrl : "./Resources/poster/spiderman3.jpg",
        infoUrl : "https://www.imdb.com/title/tt10872600/",
        watchUrl : "https://www.netflix.com/in/title/81465707/",
        trailerUrl : "https://www.youtube.com/embed/JfVOs4VSpmA?si=uLWH1YrrT0KjGCip",
        backgroundUrl : "./Resources/images/spiderman3BG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Deadpool And Wolverine",
        discription : "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.",
        rating : "7.6",
        posterUrl : "./Resources/poster/dAndW.jpg",
        infoUrl : "https://www.imdb.com/title/tt6263850/",
        watchUrl : "https://www.hotstar.com/in/movies/deadpool-wolverine/1271305185/",
        trailerUrl : "https://www.youtube.com/embed/73_1biulkYk?si=0dp3chAsJjmopqPm",
        backgroundUrl : "./Resources/images/dAndWBG.jpeg",
        movie : true,
        serie : false,
    },
    {
        name : "Black Panther 2",
        discription : "Wakanda Forever: The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
        rating : "6.7",
        posterUrl : "./Resources/poster/blackPanther2.jpg",
        infoUrl : "https://www.imdb.com/title/tt9114286/",
        watchUrl : "https://www.hotstar.com/in/movies/black-panther-wakanda-forever/1260118821/",
        trailerUrl : "https://www.youtube.com/embed/_Z3QKkl1WyM?si=v2QxjeUYnrhVP9kH",
        backgroundUrl : "./Resources/images/blackPanther2BG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "The Marvels",
        discription : "Carol Danvers gets her powers entangled with those of Kamala Khan and Monica Rambeau, forcing them to work together to save the universe.",
        rating : "5.5",
        posterUrl : "./Resources/poster/marvels.jpg",
        infoUrl : "https://www.imdb.com/title/tt10676048/",
        watchUrl : "https://www.hotstar.com/in/movies/the-marvels/1260167860/",
        trailerUrl : "https://www.youtube.com/embed/wS_qbDztgVY?si=C-3ccQWrK2Iqb2GI",
        backgroundUrl : "./Resources/images/marvelsBG.jpeg",
        movie : true,
        serie : false,
    },
    {
        name : "Deadpool",
        discription : "A wisecracking mercenary gets experimented on and becomes immortal yet hideously scarred, and sets out to track down the man who ruined his looks.",
        rating : "8.0",
        posterUrl : "./Resources/poster/deadpool.jpg",
        infoUrl : "https://www.imdb.com/title/tt1431045/",
        watchUrl : "https://www.hotstar.com/in/movies/deadpool/1770003257/",
        trailerUrl : "https://www.youtube.com/embed/Xithigfg7dA?si=LlkGD3o4i4Wmn1c5",
        backgroundUrl : "./Resources/images/deadpoolBG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Deadpool 2",
        discription : "Foul-mouthed mutant mercenary Wade Wilson (a.k.a. Deadpool) assembles a team of fellow mutant rogues to protect a young boy with abilities from the brutal, time-traveling cyborg Cable.",
        rating : "7.6",
        posterUrl : "./Resources/poster/deadpool2.jpg",
        infoUrl : "https://www.imdb.com/title/tt5463162/",
        watchUrl : "https://www.hotstar.com/in/movies/deadpool-2/1770020234/",
        trailerUrl : "https://www.youtube.com/embed/D86RtevtfrA?si=8HZrr93DQ12LS6X4",
        backgroundUrl : "./Resources/images/deadpool2BG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Eternals",
        discription : "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.",
        rating : "6.3",
        posterUrl : "./Resources/poster/eternals.jpg",
        infoUrl : "https://www.imdb.com/title/tt9032400/",
        watchUrl : "https://www.hotstar.com/in/movies/eternals/1260077949/",
        trailerUrl : "https://www.youtube.com/embed/x_me3xsvDgk?si=fhuIlh08IM_z4Lio",
        backgroundUrl : "./Resources/images/eternalsBG.jpg",
        movie : true,
        serie : false,
    },
    {
        name : "Loki",
        discription : "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of 'Avengers: Endgame.'",
        rating : "6.3",
        posterUrl : "./Resources/poster/loki.jpg",
        infoUrl : "https://www.imdb.com/title/tt9140554/",
        watchUrl : "https://www.hotstar.com/in/movies/eternals/1260077949/",
        trailerUrl : "https://www.youtube.com/embed/nW948Va-l10?si=45Iu9jYBOcfp7pyQ",
        backgroundUrl : "./Resources/images/lokiBG.jpeg",
        movie : false,
        serie : true,
    },
    {
        name : "What If...?",
        discription : "Exploring pivotal moments from the Marvel Cinematic Universe and turning them on their head, leading the audience into uncharted territory.",
        rating : "7.3",
        posterUrl : "./Resources/poster/whatIf.jpg",
        infoUrl : "https://www.imdb.com/title/tt10168312/",
        watchUrl : "https://www.disneyplus.com/series/what-if/7672ZVj1ZxU9/",
        trailerUrl : "https://www.youtube.com/embed/x9D0uUKJ5KI?si=daeVzRDnQ2T3XlSi",
        backgroundUrl : "./Resources/images/whatIfBG.jpg",
        movie : false,
        serie : true,
    },
    {
        name : "WandaVision",
        discription : "Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems.",
        rating : "7.9",
        posterUrl : "./Resources/poster/wandaVision.jpg",
        infoUrl : "https://www.imdb.com/title/tt9140560/",
        watchUrl : "https://www.disneyplus.com/series/wandavision/4SrN28ZjDLwH/",
        trailerUrl : "https://www.youtube.com/embed/sj9J2ecsSpo?si=kuuaMqb4YG-vyXvY",
        backgroundUrl : "./Resources/images/wandaVisionBG.jpg",
        movie : false,
        serie : true,
    },
    {
        name : "Falcon and Winter Soldier",
        discription : "Following the events of 'Avengers: Endgame,' Sam Wilson/Falcon and Bucky Barnes/Winter Soldier team up in a global adventure that tests their abilities -- and their patience.",
        rating : "7.1",
        posterUrl : "./Resources/poster/falconAndWS.jpg",
        infoUrl : "https://www.imdb.com/title/tt9208876/",
        watchUrl : "https://www.hotstar.com/in/shows/the-falcon-and-the-winter-soldier/1260055670/",
        trailerUrl : "https://www.youtube.com/embed/IWBsDaFWyTE?si=-DtG_thEVafwwljw",
        backgroundUrl : "./Resources/images/falconAndWSBG.jpeg",
        movie : false,
        serie : true,
    }
].sort((a,b)=> a.name.localeCompare(b.name));

const movies = [];
const series = [];
const main = document.getElementById("marvel-movie-container");

// index.html Sort movies and series from above array
if(document.getElementById("search-bar-section") !== null){
    marvelDataDisplay();
}

// index.html Display Movies and Series
function marvelDataDisplay() {
    let cards = "";
    for(d of data){
        cards += `
        <a href="movieDetails.html?detail=${d.name}">
        <figure class="marvel-movie-block">
            <img class="marvel-movie-poster" src=${d.posterUrl} alt=${d.name}+" poster">
            <figcaption class="marvel-movie-name">${d.name}</figcaption>
        </figure>
        </a>
        `
    }
    main.innerHTML = cards;
}

// index.html Search Input Bar
function searchMovies(){
    const movieName = document.getElementById("searchInput");
    if(movieName.value.trim() != ""){
        window.location.href = "searchResult.html?search="+movieName.value.trim();
    }
}

// searchResult.html
if(document.getElementById("search-results") !== null){
    const urlParams = new URLSearchParams(window.location.search);
    const searchValue = urlParams.get('search');
    for(let d of data){
        if(d.movie && d.name.toLowerCase().includes(searchValue.toLowerCase())){
            movies.push(d);
        }
        else if(d.serie && d.name.toLowerCase().includes(searchValue.toLowerCase())){
            series.push(d);
        }
    }
    searchResultMoviesTabClick();
}

//searchResult.html Search Results of Movies and Series
function searchResultMoviesTabClick(){
    document.getElementById("searchResultSeriesTab").classList.remove("active");
    document.getElementById("searchResultMoviesTab").classList.add("active");
    let cards = ""
    if(movies.length > 0){
        for(let d of movies){
            cards += `
            <a href="movieDetails.html?detail=${d.name}">
            <div class="search-results-container">
                <img src=${d.posterUrl} alt=${d.name}+" poster">
                <div>
                    <h1>${d.name}</h1>
                    <p>${d.discription}</p>
                </div>
            </div>
            </a>
            `
        }
        document.getElementById("searched-movies-series-list").innerHTML = cards;
    }
    else{
        document.getElementById("searched-movies-series-list").innerHTML = "<p id='movieNotFound'>No Movies</p>"
    }
}
function searchResultSeriesTabClick(){
    document.getElementById("searchResultMoviesTab").classList.remove("active");
    document.getElementById("searchResultSeriesTab").classList.add("active");
    let cards = ""
    if(series.length > 0){
        for(let d of series){
            cards += `
            <a href="movieDetails.html?detail=${d.name}">
            <div class="search-results-container">
                <img src=${d.posterUrl} alt=${d.name}+" poster">
                <div>
                    <h1>${d.name}</h1>
                    <p>${d.discription}</p>
                </div>
            </div>
            </a>
            `
        }
        document.getElementById("searched-movies-series-list").innerHTML = cards;
    }
    else{
        document.getElementById("searched-movies-series-list").innerHTML = "<p id='movieNotFound'>No Series</p>"
    }
}

// movieDetails.html
if(document.getElementById("movie-details-section") !== null){
    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.size > 0){
        const searchValue = urlParams.get('detail');
        if(searchValue.trim() !== ""){
            let noData = true;
            for(let d of data){
                if(d.name === searchValue){
                    noData = false;
                    document.getElementById("movie-details-section-img").style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0) 70%, rgba(107, 0, 0, 1)), url(${d.backgroundUrl})`;
                    document.getElementById("movie-details-section").innerHTML =  `<div>
                            <img src=${d.posterUrl} alt=${d.name}+" poster">
                        </div>
                        <figcaption>
                            <h1>${d.name}</h1>
                            <p>${d.discription}</p>
                            <p><img id="star-img" src="./Resources/icons/star.png" /><span>${d.rating}</span>/10</p>
                            <div>
                                <a href=${d.infoUrl} target="_blank"><img src="./Resources/icons/info.png" alt="info btn"></a>
                                <a href=${d.watchUrl} target="_blank"><img src="./Resources/icons/play.png" alt="play btn"></a>
                                <img class="marvel-movie-trailer-btn" src="./Resources/icons/trailer.png" alt="Trailer button" onclick="openTrailer('${d.trailerUrl}')">
                            </div>
                        </figcaption>
                        `; 
                    break;
                }
            }
            if(noData){
                document.getElementById("movie-details-section").innerHTML = "<p id='movieNotFound'>No Details</p>";
            }
        }
        else{
            document.getElementById("movie-details-section").innerHTML = "<p id='movieNotFound'>Bad Query</p>";
        }
    }
    else{
        document.getElementById("movie-details-section").innerHTML = "<p id='movieNotFound'>Bad Query</p>";
    }
}

// movieDetails.html Trailer
function openTrailer(trailerUrl){
    const blackOut = document.getElementById("blackOut");
    const trailerContainer = document.getElementById("trailer-container");
    if(blackOut.classList.contains("hide") && trailerContainer.classList.contains("hide")){
        document.getElementById("body").style.overflow = "hidden";
        blackOut.classList.remove("hide");
        trailerContainer.classList.remove("hide");
        trailerContainer.innerHTML = `
        <img id="cross-btn" src="./Resources/icons/cross.png" alt="cross button" onclick="closeTrailer()">
        <iframe id="trailer" src=${trailerUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }
}
function closeTrailer(){
    const blackOut = document.getElementById("blackOut");
    const trailerContainer = document.getElementById("trailer-container");
    if(!blackOut.classList.contains("hide") && !trailerContainer.classList.contains("hide")){
        document.getElementById("body").style.overflow = "auto";
        trailerContainer.innerHTML = "";
        blackOut.classList.add("hide");
        trailerContainer.classList.add("hide");
    }
}

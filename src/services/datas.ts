const characters = [
  {
    id: 1,
    name: "peter griffin",
    slug: "peter-griffin",
    skills: [
      "Superhuman strength",
      "Superhuman speed",
      "Superhuman agility",
      "Superhuman durability",
      "Superhuman stamina",
      "Superhuman endurance",
      "Manipulation",
      "Regeneration",
      "Flatulence manipulation",
      "Combat and fighting skills/prowess",
      "Gravity aura",
      "Marksmanship",
      "Cartoon physics",
      "Charisma",
      "Biokinesis",
      "Substance tolerance",
      "Fourth wall-breaking",
      "Broadway force",
      "Teleportation",
      "Cutaways",
      "Mind penetration",
    ],
    description:
      "Introducing Peter Griffin, the lovably absurd and hilariously clueless patriarch of the Griffin family from the animated sitcom Family Guy. Peter is a walking spectacle of comedic chaos, renowned for his unconventional antics and lack of filter. With a physique that defies both physics and fashion trends, he sports a prominent beer belly, a perpetual five o'clock shadow, and a grin that oozes mischief. Peter's trademark outfit consists of a white shirt, green pants, and a sense of humor that teeters on the edge of sanity.",
    age: "approximately in his 40s",
    avatar:
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683833864/fcc-family-guys/peter/peter_qniww9.png",
    images: [
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683834164/fcc-family-guys/peter/peter-griffin-facts-730x456_pesfxs.png",
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683834192/fcc-family-guys/peter/peter-griffin_x3zeka.png",
    ],
    occupations: [
      "Safety Inspector (formerly)",
      "Brewery Worker",
      "Various Odd Jobs",
    ],
  },
  {
    id: 2,
    name: "stewie griffin",
    slug: "stewie-griffin",
    skills: [
      "Genius-level intellect",
      "Exceptional physical abilities",
      "Manipulation",
      "Time travel",
      "Firearms",
      "Martial arts",
      "Agility",
      "Cunning",
      "Cartoon physics",
      "Hand-to-hand combat",
    ],
    description:
      "Stewie Griffin is a highly intelligent and diabolically clever baby with a British accent. Despite his young age, Stewie possesses a dark and twisted sense of humor, often plotting elaborate schemes to eliminate his mother, Lois, or to conquer the world.",
    age: "1 year",
    avatar:
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683835740/fcc-family-guys/stewie/stewie_ligibl.png",
    images: [
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683835731/fcc-family-guys/stewie/stewie-family-guy-fox-1085482_qxxhmu.jpg",
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683835733/fcc-family-guys/stewie/stewie-griffin-header_sbmpu7.avif",
    ],
    occupations: ["Scientist Inventor"],
  },
  {
    id: 3,
    name: "lois griffin",
    slug: "lois-griffin",
    description:
      "Lois Griffin is the matriarch of the Griffin family. She is a loving and caring wife to Peter Griffin and a devoted mother to her children, Meg, Chris, and Stewie. Lois often finds herself balancing the chaotic antics of her family while trying to maintain a sense of order in their lives.",
    age: "Late 30s",
    avatar:
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683839731/fcc-family-guys/lois/lois_rwaiti.png",
    images: [
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683839726/fcc-family-guys/lois/SEI_138632406-3458_dcwzu3.jpg",
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683839677/fcc-family-guys/lois/468852588_family-guy-1_1280_720_mxq2su.webp",
    ],
    occupations: [
      "Housewife",
      "Piano Instructor",
      "Journalist",
      "Boxer",
      "Retail Worker",
    ],
  },
  {
    id: 4,
    name: "meg griffin",
    slug: "meg-griffin",
    description:
      "Meg Griffin is the eldest daughter of the Griffin family. As a teenager, Meg often finds herself the target of ridicule and mistreatment, both at school and within her own family. Despite the constant challenges she faces, Meg maintains a resilient spirit and strives to find her place in the world.",
    age: "16 years",
    avatar:
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683839583/fcc-family-guys/meg/meg_tfdwiq.png",
    images: [
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683839932/fcc-family-guys/meg/images_ycikcx.png",
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683840043/fcc-family-guys/meg/LA7PMMm9pkPM46TvZeB7Y8-1200-80_dyrdfr.jpg",
    ],
    occupations: ["High school student"],
  },
  {
    id: 5,
    name: "joe swanson",
    slug: "joe-swanson",
    description:
      "Introducing Joe Swanson, the resilient wheelchair-bound police officer from the animated sitcom Family Guy. Joe is a character who defies expectations and showcases the triumph of the human spirit. Despite facing the challenges of being paralyzed from the waist down, Joe's indomitable willpower and unwavering determination shine through in every aspect of his life. With his quick wit and sharp sense of humor, Joe proves that being a hero is not about physical abilities but about the strength of character.",
    age: "Late 40s",
    avatar:
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683893909/fcc-family-guys/joe/joe_hpswnc.png",
    images: [
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683893882/fcc-family-guys/joe/Joe_Swanson_soundboard_g9qhys.png",
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683893887/fcc-family-guys/joe/joe-swanson-from-family-guy_ovw9dh.jpg",
    ],
    occupations: ["Police Officer", "Father", "Husband"],
  },
  {
    id: 6,
    name: "bonnie swanson",
    slug: "bonnie-swanson",
    description:
      "Introducing Bonnie Swanson, a beloved character from the animated sitcom Family Guy. Bonnie brings a touch of warmth and resilience to the vibrant community of Quahog. As a dedicated wife, nurturing mother, and loyal friend, Bonnie's presence adds depth and heart to the show's ensemble cast. Her unwavering determination and unwavering support for her loved ones make her an integral part of the fabric of the community, proving that strength comes in many forms.",
    age: "Late 30s",
    avatar:
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683894221/fcc-family-guys/bonnie/bonnie_egjud7.png",
    images: [
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683894216/fcc-family-guys/bonnie/MV5BNjk1MGVhZDctMWYyZS00ZTQzLTk1MTEtYzAzOWVjZWQ1MWIwXkEyXkFqcGdeQXVyMjYwNDA2MDE_._V1__q4bhdj.jpg",
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683894166/fcc-family-guys/bonnie/dd8sdi6-60e303f1-9871-4642-a0b0-192353edbf21_hcsih0.png",
    ],
    occupations: ["Stay-at-home Mom", "Supportive Spouse"],
  },
  {
    id: 7,
    name: "glenn quagmire",
    slug: "glenn-quagmire",
    skills: [
      "Contaminated bodily fluids",
      "Limited fighting skills",
      "Master of seduction",
      "Enhanced charisma",
      "Highly skilled pilot",
      "Very High flexibility",
      "Manipulation",
    ],
    description:
      "Glenn Quagmire, often referred to as just 'Quagmire,' is Peter's eccentric and wildly promiscuous neighbor. Known for his distinctive voice and catchphrase 'Giggity giggity goo,' Quagmire is always on the prowl for his next romantic conquest and is infamous for his outrageous and often inappropriate behavior.",
    age: "Late 40s",
    avatar:
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683894304/fcc-family-guys/quagmire/quaqmire_javsub.png",
    images: [
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683894743/fcc-family-guys/quagmire/k1h6a4qz-1920_bjbld4.jpg",
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683894897/fcc-family-guys/quagmire/qVoMBBzZMtiN5mAe8weLHG_lh9utx.jpg",
    ],
    occupations: ["commercial airline pilot"],
  },
  {
    id: 8,
    name: "brian griffin",
    slug: "brian-griffin",
    skills: [
      "High intelligence",
      "Superior athleticism",
      "Marksmanship",
      "Weaponry usage",
      "Expert tactician",
      "Hand-to-hand combat",
      "Multilingualism",
      "Sharpshooting",
      "Writing",
      "Enhanced smelling",
      "Enhanced hearing",
      "Tracking instincts",
      "Trash talk",
      "Manipulation",
    ],
    description:
      "Brian Griffin is the Griffin family's anthropomorphic pet dog and the voice of reason amidst the chaos. He is known for his intellectual pursuits, his love for martinis, and his wit. Brian often serves as the moral compass of the group and engages in various adventures and misadventures alongside the family.",
    age: "7 years (in dog years)",
    avatar:
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683835355/fcc-family-guys/brian/brian_p9ewsd.png",
    images: [
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683835426/fcc-family-guys/brian/best-brian-griffin-quotes_hl7ncy.jpg",
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683835430/fcc-family-guys/brian/l-intro-1669128726_mtvlll.jpg",
    ],
    occupations: ["Writer"],
  },
  {
    id: 9,
    name: "chris griffin",
    slug: "chris-griffin",
    description:
      "Chris Griffin is the lovable but dim-witted teenage son of Peter and Lois Griffin. Chris often finds himself unintentionally involved in absurd situations, making him a constant source of comedic moments in the show. Despite his lack of intelligence, Chris has a heart of gold and possesses a unique innocence that endears him to those around him.",
    age: "14 years",
    avatar:
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683895493/fcc-family-guys/chris/chris_qzisgb.png",
    images: [
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683895641/fcc-family-guys/chris/9f72e811-1ec5-43b5-ba0b-b7488fce79a5_screenshot_z9hisi.jpg",
      "https://res.cloudinary.com/dakts9ect/image/upload/v1684095660/fcc-family-guys/chris/Chris-Griffin.Family-Guy_hvzdxd.webp",
    ],
    occupations: [
      "High school student",
      "Former paperboy Former",
      "Supervisor of Quahog Mini-Mart Middle school student",
    ],
  },
  {
    id: 10,
    name: "adam west",
    slug: "adam-west",
    description:
      "Adam West is a fictionalized version of the late actor himself, serving as the eccentric and quirky mayor of Quahog. Known for his bizarre and nonsensical behavior, Adam West adds a touch of hilarity to the show with his outrageous antics.",
    age: "Deceased",
    avatar:
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683895724/fcc-family-guys/adam/adam_eghkgo.png",
    images: [
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683895832/fcc-family-guys/adam/3261321-screen_shot_2017-07-18_at_9.07.30_am_m1e56b.png",
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683895830/fcc-family-guys/adam/QzWH4xks3ughYw9rZhprAE_ipcnof.png",
    ],
    occupations: ["Mayor"],
  },
  {
    id: 11,
    name: "cleveland brown",
    slug: "cleveland-brown",
    description:
      "Cleveland Brown is a mild-mannered and good-hearted friend of Peter Griffin. Known for his distinctive voice and calm demeanor, Cleveland is often the voice of reason among his group of friends. After leaving Quahog, he moved to Stoolbend and starred in his own spin-off show, 'The Cleveland Show.'",
    age: "Late 40s",
    avatar:
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683895954/fcc-family-guys/clevland/clevland_hix2eb.png",
    images: [
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683896067/fcc-family-guys/clevland/007690_1268x713_639191_053_u0jmge.jpg",
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683896059/fcc-family-guys/clevland/Cleveland_aa3sa3.jpg",
    ],
    occupations: ["Deli Owner", "Former Cable Guy"],
  },
  {
    id: 12,
    name: "carter pewterschmidt",
    slug: "carter-pewterschmidt",
    skills: [
      "Wealth",
      "Resources",
      "Intelligence",
      "Deception",
      "Charisma",
      "Intimidation",
    ],
    description:
      "Carter Pewterschmidt is Lois Griffin's wealthy and controlling father. He is the CEO of Pewterschmidt Industries and is known for his arrogance and conservative beliefs. Despite his cold exterior, Carter occasionally shows moments of vulnerability and even bonds with Peter on rare occasions.",
    age: "Late 70s",
    avatar:
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683896233/fcc-family-guys/carter/carter_ca1cex.png",
    images: [
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683896248/fcc-family-guys/carter/maxresdefault_uh6ov6.jpg",
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683896249/fcc-family-guys/carter/ea95d4ac245a9a2fca1003439e5831698a456fb3_00_wa7fz0.jpg",
    ],
    occupations: ["CEO of Pewterschmidt Industries"],
  },
  {
    id: 13,
    name: "dr. elmer hartman",
    slug: "dr-elmer-hartman",
    description:
      "Dr. Elmer Hartman is the Griffin family's incompetent and often clueless physician. Despite his lack of medical expertise, he is always ready to offer his questionable advice and treatments. Dr. Hartman's character provides comedic relief with his outrageous and misguided medical practices.",
    age: "Late 40s",
    avatar:
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683896780/fcc-family-guys/doctor/doctor_o1igzb.png",
    images: [
      "https://res.cloudinary.com/dakts9ect/image/upload/v1684095807/fcc-family-guys/doctor/7ba7d4d61c375ce681738c3f34c91fd92c2d139d_00_o1nxwh.jpg",
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683896809/fcc-family-guys/doctor/oqggjnjx85y61_dcfftq.jpg",
    ],
    occupations: ["Medical Doctor"],
  },
  {
    id: 14,
    name: "ernie the giant chicken",
    slug: "ernie-the-giant-chicken",
    skills: [
      "Superhuman strength",
      "Superhuman durability",
      "Superhuman speed",
      "Adrenaline",
      "Hand-to-hand combat",
      "Cartoon physics",
      "Regeneration",
      "Immortality",
    ],
    description:
      "Ernie The Giant Chicken is a recurring antagonist in Family Guy, known for his intense rivalry with Peter Griffin. Their clashes often escalate into epic and absurd fights that span over several episodes. Ernie is a formidable adversary, always seeking revenge on Peter for a long-forgotten disagreement.",
    age: "",
    avatar:
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683896314/fcc-family-guys/chicken/chicken_bt2akm.png",
    images: [
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683896683/fcc-family-guys/chicken/images_qwigpy.jpg",
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683896686/fcc-family-guys/chicken/maxresdefault_1_zyqv4m.jpg",
    ],
    occupations: ["Peter Griffin's rival"],
  },
  {
    id: 15,
    name: "tom tucker",
    slug: "tom-tucker",
    description:
      "Tom Tucker is the charismatic and smooth-talking news anchor for the Quahog 5 News. He is known for his sensationalistic reporting style and his flirtatious personality. Tom takes his role as a news anchor very seriously, even if it means sacrificing journalistic integrity for ratings.",
    age: "40s",
    avatar:
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683897089/fcc-family-guys/tom/tom_rb8q76.png",
    images: [
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683897083/fcc-family-guys/tom/MV5BZDg4YWYwN2QtNDZlZi00MjI2LTk5M2MtNzliMjliNjc2MWI0XkEyXkFqcGdeQXVyMjYwNDA2MDE_._V1__b4axte.jpg",
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683897014/fcc-family-guys/tom/Screenshot_2023-05-12_173945_xvogma.png",
    ],
    occupations: ["News Anchor"],
  },
  {
    id: 16,
    name: "herbert",
    slug: "herbert",
    skills: [
      "Charisma",
      "Abnormal speed",
      "Manipulation",
      "hand-to-hand combat",
      "Immortality",
    ],
    description:
      "Herbert is an elderly neighbor of the Griffin family, often seen lurking around their neighborhood. He has a peculiar infatuation with young boys, particularly with Chris Griffin, and frequently tries to engage in inappropriate activities with him. Herbert's character adds a touch of dark humor and discomfort to the show.",
    age: "70s",
    avatar:
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683899070/fcc-family-guys/herbert/herbert_d5xzmp.png",
    images: [
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683899181/fcc-family-guys/herbert/MV5BYjY2ZjU4MWQtNWM0ZC00NTQxLWE1ZGMtYTAxZmQxZGNjNTEzXkEyXkFqcGdeQXVyNjMxNzQ2NTQ_._V1__d3z8fb.jpg",
      "https://res.cloudinary.com/dakts9ect/image/upload/v1683899135/fcc-family-guys/herbert/maxresdefault_mhitnq.jpg",
    ],
    occupations: ["Retired U.S. Army Veteran"],
  },
];

const quotes = [
  {
    character_id: 1,
    qoute: "Lois, if I'm not back in five minutes... wait longer!",
  },
  {
    character_id: 1,
    qoute:
      "I may not be the sharpest tool in the shed, but I'm the most entertaining one!",
  },
  {
    character_id: 1,
    qoute:
      "Why do things today when you can put them off until tomorrow? Procrastination is my middle name!",
  },
  {
    character_id: 1,
    qoute: "I don't always make sense, but when I do, it's by accident.",
  },
  {
    character_id: 1,
    qoute:
      "Life is too short to not eat dessert first... and second... and third.",
  },

  {
    character_id: 2,
    qoute: "Victory is mine!",
  },
  {
    character_id: 2,
    qoute: "What the deuce?",
  },
  {
    character_id: 2,
    qoute: "I'm going to do what I do best: lie, steal, cheat, and survive!",
  },
  {
    character_id: 2,
    qoute:
      "I'm not drunk, I'm just exhausted from staying up all night drinking.",
  },
  {
    character_id: 2,
    qoute: "I'm a homicidal maniac. They look just like everyone else.",
  },
  {
    character_id: 2,
    qoute: "I'm not insane. My mother had me tested.",
  },
  {
    character_id: 2,
    qoute: "I'm surrounded by idiots.",
  },
  {
    character_id: 2,
    qoute:
      "Damn you, vile woman! You've impeded my work since the day I escaped from your wretched womb!",
  },
  {
    character_id: 3,
    qoute: "Peter, I love you, but you have more nerve than a toothache.",
  },
  {
    character_id: 3,
    qoute:
      "I don't care what other people think. I've always been unconventional, and I'm proud of it.",
  },
  {
    character_id: 3,
    qoute:
      "Being a mother is hard work, but it's the most rewarding job in the world.",
  },
  {
    character_id: 3,
    qoute:
      "Peter, you're like a hurricane of destruction, leaving chaos in your wake.",
  },
  {
    character_id: 3,
    qoute:
      "I may not always agree with Peter's shenanigans, but I'll always stand by him.",
  },
  {
    character_id: 3,
    qoute:
      "Life is too short to worry about what others think. Embrace your quirks and live your best life.",
  },
  {
    character_id: 3,
    qoute:
      "Being a strong woman means standing up for what you believe in and not backing down.",
  },
  {
    character_id: 3,
    qoute:
      "I may seem like the calm one in our family, but deep down, I have a fiery spirit.",
  },
  {
    character_id: 3,
    qoute:
      "Peter, sometimes I think you have a permanent brain freeze from all the ice cream you eat.",
  },
  {
    character_id: 4,
    qoute: "Why does everyone always pick on me?",
  },
  {
    character_id: 4,
    qoute: "I'm just trying to find my place in this crazy world.",
  },
  {
    character_id: 4,
    qoute: "Sometimes I wish I could just disappear and start over.",
  },
  {
    character_id: 4,
    qoute:
      "Being a teenage girl is like being trapped in a never-ending nightmare.",
  },
  {
    character_id: 4,
    qoute: "No matter how hard I try, it feels like I'm always the outcast.",
  },
  {
    character_id: 4,
    qoute:
      "I may not be the most popular or glamorous, but I have my own unique qualities.",
  },
  {
    character_id: 4,
    qoute:
      "It's not easy being the black sheep of the family, but I've learned to embrace it.",
  },
  {
    character_id: 4,
    qoute: "I may not have it all figured out, but I'm doing the best I can.",
  },
  {
    character_id: 4,
    qoute:
      "Sometimes all it takes is one person to believe in you to make a difference.",
  },
  {
    character_id: 4,
    qoute:
      "In a world that constantly rejects me, I'll keep pushing forward and proving them wrong.",
  },
  {
    character_id: 5,
    qoute: "You don't have to win to have fun.",
  },
  {
    character_id: 5,
    qoute: "Peter, face it. Without Quagmire, we're boring.",
  },
  {
    character_id: 5,
    qoute: "You want me to be the one who says Giggity now?",
  },
  {
    character_id: 7,
    qoute: "I might need two weeks off from this friendship.",
  },
  {
    character_id: 7,
    qoute: "He's a baby who did a baby thing. Let's all calm down a little.",
  },
  {
    character_id: 7,
    qoute:
      "I was living the life, banging chicks and eating cabbage. You know.",
  },
  {
    character_id: 7,
    qoute: "Peter's a good friend. Not like Cleveland.",
  },
  {
    character_id: 7,
    qoute: "If cellphones worked, every movie would be two minutes long.",
  },
  {
    character_id: 7,
    qoute:
      "How do you think NBA players get all those chicks? They're all great cooks. Except Kobe Bryant. His secret is different.",
  },
  {
    character_id: 7,
    qoute: "I don't want to go to jail, but I really want to take credit.",
  },
  {
    character_id: 8,
    qoute: "We can make this work, like couples who meet on Craig's List.",
  },
  {
    character_id: 8,
    qoute: "I'm just saying. It's no surprise that justice isn't colorblind.",
  },
  {
    character_id: 8,
    qoute: "You're like all the worst parts of a girlfriend.",
  },
  {
    character_id: 8,
    qoute:
      "You know, it's times like this where I think if I didn't talk and you were a normal baby, we wouldn't have any of these problems.",
  },
  {
    character_id: 8,
    qoute:
      "You go ahead, I have to make the waffle fries you scream-requested in the car.",
  },
  {
    character_id: 8,
    qoute: "I guess you can call me the Man of La Muncha.",
  },
  {
    character_id: 9,
    qoute:
      "This is why you're so great, dad. You don't pretend to be someone you're not. You don't care what anyone thinks.",
  },
  {
    character_id: 9,
    qoute:
      "I thought you were this wordly, sophisticated guy, but you're just a fraud. Like Moses.",
  },
  {
    character_id: 9,
    qoute: "No, but why are you saying the dogs name before dads.",
  },
  {
    character_id: 9,
    qoute: "I'm gonna see which lobster I think deserves to die.",
  },
  {
    character_id: 9,
    qoute: "I always knew one day this would happen.",
  },
  {
    character_id: 10,
    qoute: "See? We're already making each other better people!",
  },
  {
    character_id: 10,
    qoute: "Every Friday night, I'm a clearance-sale area rug.",
  },
  {
    character_id: 10,
    qoute:
      "If I enter Connecticut, I'm entering every state that Connecticut's ever been with. Good luck, brave travelers.",
  },
  {
    character_id: 10,
    qoute:
      "It's creamed corn. I brang it from home because I don't like the creamed corn they have here. It's too crunchy.",
  },
  {
    character_id: 11,
    qoute:
      "Grab that letter opener over there. I'm going to show you why you should never mail cash.",
  },
  {
    character_id: 11,
    qoute:
      "I'd be happy to get you an interview. And as a white woman, you'd be the minority here. Unless you're an alcoholic.",
  },
  {
    character_id: 11,
    qoute:
      "Oh, yeah. Black guys put hot sauce on everything on account most of us have been pepper-sprayed by the time we're two.",
  },
  {
    character_id: 11,
    qoute:
      "Your kid's got a walk in closet?! Two of mine gotta sleep in the car!",
  },
  {
    character_id: 12,
    qoute: "I got to email that to Babs. She hates people.",
  },
  {
    character_id: 12,
    qoute: "The government wants to tell you how many children you can have!",
  },
  {
    character_id: 12,
    qoute:
      "I lost my home, my money, and perhaps just as serious, my wife left me!",
  },
  {
    character_id: 16,
    qoute:
      "Oh, hey there Chris! Happy Valentine's Day! Hope Cupid brings you a saggy old bag of treats!",
  },
  {
    character_id: 16,
    qoute:
      "You know Chris, all my life, I've wanted to see you locked in a basement. But now that it's happened, all I want to do is get you out!",
  },
  {
    character_id: 16,
    qoute:
      "Look. Everyone but Chris, keep your pants on and we'll find a way out of this.",
  },
  {
    character_id: 16,
    qoute:
      "Ma'am, I hate to be a nuisance but your son stopped kicking the back of my chair. ",
  },
];

const quiz = [
  {
    id: "GKfrCbCN5f",
    title: "What is the name of the Griffin family dog?",
    answers: ["Brian", "Stewie", "Meg", "Chris"],
    correct_answer: "Brian",
  },
  {
    id: "cQC0Y2Dmhu",
    title: "What is the name of Lois Griffin's father?",
    answers: [
      "Carter Pewterschmidt",
      "Peter Griffin",
      "Glenn Quagmire",
      "Cleveland Brown",
    ],
    correct_answer: "Carter Pewterschmidt",
  },
  {
    id: "DFfAzImRk6",
    title: "What is the name of the town where the Griffin family lives?",
    answers: ["Quahog", "Springfield", "Simpsons", "Griffinville"],
    correct_answer: "Quahog",
  },
  {
    id: "RY9qUoigEA",
    title:
      "What is the name of the bar where Peter, Joe, Quagmire, and Cleveland go to?",
    answers: [
      "The Drunken Clam",
      "The Griffin Tavern",
      "The Quahog Pub",
      "Patriot House",
    ],
    correct_answer: "The Drunken Clam",
  },
  {
    id: "qsLWiq531a",
    title: "What is the name of Stewie Griffin's teddy bear?",
    answers: ["Rupert", "Winston", "Barney", "Wally"],
    correct_answer: "Rupert",
  },
  {
    id: "WbxoPIWfyk",
    title: "What is the name of the chicken who is Peter Griffin's nemesis?",
    answers: [
      "Lois Griffin",
      "Meg Griffin",
      "Stewie Griffin",
      "Ernie The Giant Chicken",
    ],
    correct_answer: "Ernie The Giant Chicken",
  },
  {
    id: "MUfeMhv3n8",
    title: "What is the name of the news anchor on Channel 5?",
    answers: ["Tom Tucker", "Diane Simmons", "Peter Griffin", "Stewie Griffin"],
    correct_answer: "Tom Tucker",
  },
  {
    id: "c2Ocp9ZvN2",
    title:
      "What is the name of the police officer who is Joe Swanson's partner?",
    answers: [
      "Brian Griffin",
      "Stewie Griffin",
      "Glenn Quagmire",
      "Akira Yoshida",
    ],
    correct_answer: "Akira Yoshida",
  },
  {
    id: "ypcGVPrhsg",
    title:
      "What is the name of the mall that the Griffin family frequently goes to?",
    answers: [
      "The Quahog Mall",
      "The Springfield Mall",
      "The Simpsons Mall",
      "The Griffin Mall",
    ],
    correct_answer: "The Quahog Mall",
  },
  {
    id: "gC3jrDwEYk",
    title: "Who does Stewie want to kill?",
    answers: ["Meg", "Chris", "Peter", "Lois"],
    correct_answer: "Lois",
  },
  {
    id: "csOEYs6zXn",
    title: "Where was Peter born?",
    answers: ["Mexico", "Canada", "United States", "Russia"],
    correct_answer: "Mexico",
  },
  {
    id: "cyqZYE8DIK",
    title: "Which Family Guy character is obsessed with world domination?",
    answers: ["Meg", "Chris", "Stewie", "Brian"],
    correct_answer: "Stewie",
  },
  {
    id: "CfQnf3lH56",
    title: "Who is the mayor of Quahog?",
    answers: ["Bill Bixby", "Adam West", "Lynda Carter", "Burt Ward"],
    correct_answer: "Adam West",
  },
  {
    id: "e3dDjEEWl0",
    title: "Who founded the city of Quahog?",
    answers: ["Griffin Peterson", "Adam West", "Miles Musket", "A Frog"],
    correct_answer: "Griffin Peterson",
  },
  {
    id: "wKuUTrvMrF",
    title: "What did Peter change Meg's name to on her birth certificate?",
    answers: ["Megillah", "Megatron", "Megolavina", "Mega Millions"],
    correct_answer: "Megatron",
  },
  {
    id: "SlYDds3o7F",
    title: "Who burned The Drunken Clam to the ground?",
    answers: ["Peter", "Brian", "God", "Stewie"],
    correct_answer: "Peter",
  },
];

export { characters, quotes, quiz };

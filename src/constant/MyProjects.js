import { AiOutlineCamera, BiBot, FaGamepad, FaJava, FaPython, GiComputing, RiUserVoiceLine, SiArduino, VscCircuitBoard } from 'react-icons/all'

const s = {
    arduino: {
        name: "Arduino",
        Icon: SiArduino
    },
    electronics: {
        name: "Electronics",
        Icon: VscCircuitBoard
    },
    processing: {
        name: "Processing",
        Icon: FaJava
    },
    python: {
        name: "Python",
        Icon: FaPython
    },
    ml: {
        name: "Machine Learning",
        Icon: GiComputing
    },
    game: {
        name: "Game Development",
        Icon: FaGamepad
    },
    bot: {
        name: "Bot",
        Icon: BiBot
    },
    camera: {
        name: "Camera",
        Icon: AiOutlineCamera
    },
    vs: {
        name: "Voice Synthesizer",
        Icon: RiUserVoiceLine
    }
}

const MyProjects = {
    profile_pic_url: "https://instagram.fkul3-4.fna.fbcdn.net/v/t51.2885-19/s150x150/166753066_261184458889596_1062475830996528941_n.jpg?tp=1&_nc_ht=instagram.fkul3-4.fna.fbcdn.net&_nc_ohc=Dil6nqTd9AMAX-7L_Oh&edm=AJBgZrYAAAAA&ccb=7-4&oh=39a28fce123b2806183cf59ef431f437&oe=60997B5E&_nc_sid=78c662",
    username: "_hahahaziq_",
    profile_url: "https://www.instagram.com/_hahahaziq_/",
    video_list: [
        {
            title: "Batu Delima Debunk!",
            des: "I have seen videos that claimed the Batu Delima ring can glow under water. So here i am recreating my own \"batu\" that can glow underwater. Man.. it just science!  ",
            stacks: [s.electronics],
            url: "https://instagram.fkul3-3.fna.fbcdn.net/v/t50.2886-16/64574155_320783812186189_3367217038428800082_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fkul3-3.fna.fbcdn.net&_nc_cat=101&_nc_ohc=DPXg1yp4zZEAX8cvqvw&edm=AJBgZrYAAAAA&vs=18075185893012747_3170132231&_nc_vs=HBksFQAYJEdNdFMyUU5OMEN4TndDTUJBRklFTVdFT3dyb3Via1lMQUFBRhUAAsgBABUAGCRHUEtvMndNZ09fNnFJb0FCQUo0SDRrcnN1SzE1YmtZTEFBQUYVAgLIAQAoABgAGwAVAAAmlqvgmKLSm0AVAigCQzMsF0BNWZmZmZmaGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHXqBwA%3D&ccb=7-4&oe=60777FFB&oh=38a1e1a887786b9c330c55f44cd3ee62&_nc_sid=78c662"
        },
        {
            title: "Chicken Nugget Song",
            des: "Owh ya! I saw this KFC commercial uses fried chickens as music instrument! Talk about food and music combined. All we need is science and some chicken nuggets. I don't have any musical instrument, so i created a simple piano key software using processing. Using arduino to collect inputs triggered from nuggets and send those to play its sound accordingly.",
            stacks: [s.arduino, s.electronics, s.processing],
            url: "https://instagram.fkul3-3.fna.fbcdn.net/v/t50.2886-16/64999881_146153679785317_7243135257328339616_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fkul3-3.fna.fbcdn.net&_nc_cat=101&_nc_ohc=NnoXiAtxQYUAX9bm57h&edm=AJBgZrYAAAAA&vs=18059952658099413_142296142&_nc_vs=HBksFQAYJEdNblIzd05salNvTzdZUUFBS0RLS1Fra3lZUmtia1lMQUFBRhUAAsgBABUAGCRHQlZ1NHdPQnpGVlNPXzRJQUhOS2pITHJNa1JMYmtZTEFBQUYVAgLIAQAoABgAGwAVAAAmqtu46MnblEAVAigCQzMsF0BN3dLxqfvnGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHXqBwA%3D&ccb=7-4&oe=607760BE&oh=81dd37953593fbabb12c793988d17608&_nc_sid=78c662"
        },
        {
            title: "Blinking Flappy Bird",
            des: "This one was fun! Just to make things clear, i'm not the one who trained the model. I'm using available trained face detection model with facial landmarks that i took from the internet. And i just do the logic of tracking the blinking eye and the game.",
            stacks: [s.python, s.ml, s.game, s.camera],
            url: "https://instagram.fkul3-3.fna.fbcdn.net/v/t50.2886-16/65983197_101061861173831_6644743748629176567_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fkul3-3.fna.fbcdn.net&_nc_cat=111&_nc_ohc=lKXcaVlbNGkAX-dmdgJ&edm=AJBgZrYAAAAA&vs=17852534776467163_2327472495&_nc_vs=HBksFQAYJEdOM1M3Z05INmxWTTZsc0FBUGNnaXVnNzN6WmNia1lMQUFBRhUAAsgBABUAGCRHQjBwbGdNeDdVeE1RMW9CQUdpeDNobHJMWllQYmtZTEFBQUYVAgLIAQAoABgAGwAVAAAmtt%2FeqqOytj8VAigCQzMsF0BNszMzMzMzGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHXqBwA%3D&ccb=7-4&oe=60774F29&oh=f53a8940e15817673f9dd433c67823e0&_nc_sid=78c662"
        },
        {
            title: "Simplest 2DOF Face Camera",
            des: "I have background in hardware development so it's kinda my thing to develop hardware stuff if i got some extra cash to buy those hardwares. Also at this time i was teaching an international intern at my previous company on how to communicate data from machines/micro-controllers back and forth to hardware, PIDs and all those good stuff.",
            stacks: [s.arduino, s.python, s.electronics, s.ml, s.camera],
            url: "https://instagram.fkul3-3.fna.fbcdn.net/v/t50.2886-16/66510107_1148340648683135_4028613256107994479_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fkul3-3.fna.fbcdn.net&_nc_cat=111&_nc_ohc=6nvC9-IkzigAX-H6ta4&edm=AJBgZrYAAAAA&vs=17970662506275874_1686980947&_nc_vs=HBksFQAYJEdCdmQ5Z04tSm5Ma2FCUUVBRzh0djNOcGd1ZzNia1lMQUFBRhUAAsgBABUAGCRHRmhMOUFPZjJaUjMya1VCQU5EVmlDMkk3QjVKYmtZTEFBQUYVAgLIAQAoABgAGwAVAAAmxP7jzJiO7D8VAigCQzMsF0BN5mZmZmZmGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHXqBwA%3D&ccb=7-4&oe=60774451&oh=b46b95972c19eefc12437e59b4dbf3e9&_nc_sid=78c662"
        },
        {
            title: "Basic camera translator",
            des: "This one was a challenge from a friend. She told me to develop a camera translator. She loves to travel the world so it will be easy for her to read the signboard in other countries. I tried a couple of translator engine and as expected, Google translate is still the best one.",
            stacks: [s.python, s.ml, s.camera],
            url: "https://instagram.fkul3-3.fna.fbcdn.net/v/t50.2886-16/67473850_1909915852549593_2412139601914463814_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fkul3-3.fna.fbcdn.net&_nc_cat=109&_nc_ohc=elDMCnN8QL8AX_SfLu2&edm=AJBgZrYAAAAA&vs=18061863805123717_1919488300&_nc_vs=HBksFQAYJEdMcVJCUVRaTGZIdkRza0dBRWFHd3hnd3BIa2hia1lMQUFBRhUAAsgBABUAGCRHQTdHQXdRTjdYT1RSNGNBQVBhMUp1allCYm9JYmtZTEFBQUYVAgLIAQAoABgAGwAVAAAmit7NnunKlUAVAigCQzMsF0BOBDlYEGJOGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHXqBwA%3D&ccb=7-4&oe=6077827A&oh=437577186489ccb0a797617577c452c3&_nc_sid=78c662"
        },
        {
            title: "Simple 3D Mapping",
            des: "I made this project just to make a simpler version of lidar sensor instead of buying one. This was also a demo for basic understanding concept in mapping implementation. Yeap. those autonomous cars, bots and even 3D scanner implemented the same concept to map. no magic.",
            stacks: [s.arduino, s.electronics, s.processing],
            url: "https://instagram.fkul3-2.fna.fbcdn.net/v/t50.2886-16/67905254_1105813559627967_8097829295541405850_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fkul3-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=iRk4xCXhbREAX8vANxP&edm=AJBgZrYAAAAA&vs=17881941856381884_4251530454&_nc_vs=HBksFQAYJEdPWW1EQVMtMEdoSXVfMERBSnBJZnhUWFJHRndia1lMQUFBRhUAAsgBABUAGCRHUFRZQ3dSVm9lSHZZTEVCQU9BZG5ZNFQxUVJ0YmtZTEFBQUYVAgLIAQAoABgAGwAVAAAm%2BIimmf%2Fhwz8VAigCQzMsF0BNMzMzMzMzGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHXqBwA%3D&ccb=7-4&oe=60778C69&oh=7fed731dcf45662f48c1d0ae0c186004&_nc_sid=78c662"
        },
        {
            title: "Voice Translator",
            des: "With the same translator i used in camera translator, all i did was enabled the speech-to-text from microphone and send those generated text to be translated. Owh yeah. I also added voice synthesizer to speak the translation.",
            stacks: [s.python, s.ml, s.vs],
            url: "https://instagram.fkul3-4.fna.fbcdn.net/v/t50.2886-16/68601316_167609104284508_5449568089487971581_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fkul3-4.fna.fbcdn.net&_nc_cat=104&_nc_ohc=WwX_7w_V8jMAX82H99b&edm=AJBgZrYAAAAA&vs=17865699544445967_3210527281&_nc_vs=HBksFQAYJEdPVEZGZ1JjT3hfSmNKZ0FBUDBVUE9sTndhQkxia1lMQUFBRhUAAsgBABUAGCRHRjhoR2dUSVVkc0ZxS0lBQUY4WlpoXzFGa2xJYmtZTEFBQUYVAgLIAQAoABgAGwAVAAAmnpXTmsiwvD8VAigCQzMsF0BNap%2B%2Bdsi0GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHXqBwA%3D&ccb=7-4&oe=607750B3&oh=b02ab23ba0f0228b8172537a335bda5b&_nc_sid=78c662"
        },
        {
            title: "Simple AIML",
            des: "Chatbot!!!! A lot of people gets hyped up about chatbot, mostly business owners to create continous engagement to their client. But instead of just typing and get the replies in text. I added microphone speech-to-text as input and voice synthesizer to read the bot replies. Did you know that we have Bahasa Malaysia voice synthesizer in our Windows pc? His name is Microsoft Rizwan. so if u need to synthesize Malay words, use him instead. His sounds super Malay!",
            stacks: [s.ml, s.python, s.vs, s.bot],
            url: "https://instagram.fkul3-2.fna.fbcdn.net/v/t50.2886-16/68990348_178332133190186_4844040447512545867_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fkul3-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=qt1LCDRaRYMAX9vxGv_&edm=AJBgZrYAAAAA&vs=18011708191235140_2807890135&_nc_vs=HBksFQAYJEdJeTFIQVFxYW5Ndk1hSUFBRXNLbkVjZmZUbERia1lMQUFBRhUAAsgBABUAGCRHRjhBSGdRYURiVEE1RjhFQUREQmVKQ1FkRjljYmtZTEFBQUYVAgLIAQAoABgAGwAVAAAmiIiB8rHj%2Fj8VAigCQzMsF0BIKp%2B%2Bdsi0GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHXqBwA%3D&ccb=7-4&oe=60771DA3&oh=645fd9cc32b3e3113bd0b380342b8475&_nc_sid=78c662"
        }
    ]
}

export default MyProjects
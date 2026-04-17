import varanasi from '../assets/travel/varanasi.png';
import wayanad from '../assets/travel/wayanad.png';
import northSikkim from '../assets/travel/north_sikkim.png';
import manali from '../assets/travel/manali.png';

const travelPosts = [
    {
        id: 1,
        slug: 'varanasi',
        title: 'The Eternal City of Light',
        location: 'Varanasi, Uttar Pradesh',
        date: 'March 2025',
        coverImage: varanasi,
        summary: 'Witnessing the ancient rituals on the ghats of the Ganges — a spiritual journey through India\'s oldest living city.',
        description: [
            'Varanasi is not a city you visit — it\'s a city that visits you, deep in your soul. Walking through the narrow, winding lanes at dawn, with the sound of temple bells echoing off centuries-old walls, I felt like I had stepped into a living museum of human civilization.',
            'The Ganga Aarti at Dashashwamedh Ghat was nothing short of mesmerizing. As the priests performed the ritual with synchronized movements, holding enormous flaming lamps, the river reflected a thousand flickering lights. The entire experience felt otherworldly.',
            'I spent my mornings on a boat watching the sunrise paint the ghats in shades of gold and saffron. Each ghat tells a different story — from the cremation fires of Manikarnika to the peaceful meditation spots at Assi Ghat. The contrast of life and death coexisting so openly was profoundly moving.',
            'The street food of Varanasi deserves its own chapter. From the famous Banarasi paan to the creamy lassi at Blue Lassi Shop, every bite was an explosion of flavor. The kachori-sabzi breakfast by the ghats became my daily ritual.'
        ],
        highlights: [
            'Sunrise boat ride on the Ganges',
            'Ganga Aarti at Dashashwamedh Ghat',
            'Exploring the ancient lanes of the old city',
            'Sarnath — where Buddha gave his first sermon',
            'Banarasi silk saree shopping',
            'Street food trail — lassi, kachori & paan'
        ],
        tags: ['Spiritual', 'Heritage', 'Culture', 'Street Food']
    },
    {
        id: 2,
        slug: 'wayanad',
        title: 'Into the Green Wilderness',
        location: 'Wayanad, Kerala',
        date: 'January 2025',
        coverImage: wayanad,
        summary: 'Getting lost in the misty tea plantations and ancient forests of Kerala\'s most enchanting hill district.',
        description: [
            'Wayanad greeted me with a curtain of mist that parted to reveal the most impossibly green landscape I\'d ever seen. Every direction I looked, there were rolling hills covered in tea plantations, pepper vines, and dense tropical forest.',
            'The trek to Chembra Peak was the highlight of my trip. At about 6,900 feet, it\'s the highest peak in Wayanad, and the heart-shaped lake near the summit felt like nature\'s own valentine. The 360-degree view from the top — layers of blue-green mountains fading into the horizon — was worth every bead of sweat.',
            'Edakkal Caves blew my mind. These aren\'t really caves but a gap formed by a huge rock balanced on the edges of two cliffs. Inside, there are petroglyphs dating back to 6,000 BCE. Standing there, tracing the ancient carvings with my eyes, I felt connected to a civilization that existed thousands of years before recorded history.',
            'The homestays in Wayanad are something else entirely. I stayed at a spice plantation where my hosts cooked fresh Kerala meals with ingredients plucked right from the garden. Waking up to birdsong and coffee that was literally grown, roasted, and brewed on the same property was pure magic.'
        ],
        highlights: [
            'Chembra Peak trek & heart-shaped lake',
            'Edakkal Caves — 6,000 BCE petroglyphs',
            'Banasura Sagar Dam — India\'s largest earth dam',
            'Spice plantation homestay experience',
            'Pookode Lake kayaking',
            'Authentic Kerala cuisine & fresh coffee'
        ],
        tags: ['Nature', 'Trekking', 'Wildlife', 'Homestay']
    },
    {
        id: 3,
        slug: 'north-sikkim',
        title: 'Where Heaven Meets Earth',
        location: 'North Sikkim, India',
        date: 'November 2024',
        coverImage: northSikkim,
        summary: 'A breathtaking road trip through the Himalayas to Gurudongmar Lake — one of the highest lakes in the world.',
        description: [
            'North Sikkim is where India touches the sky. The journey from Gangtok to Lachen was one of the most dramatic road trips I\'ve ever taken — winding mountain roads carved into sheer cliffs, with the Teesta River roaring hundreds of feet below.',
            'Gurudongmar Lake at 17,800 feet left me speechless — literally, because at that altitude, even breathing feels like an achievement. The lake was a mirror of impossible blue, reflecting snow-capped peaks that seemed close enough to touch. Parts of it were still frozen, creating a surreal patchwork of ice and turquoise water.',
            'Yumthang Valley, the "Valley of Flowers of Sikkim," was draped in a blanket of rhododendrons when I visited. The hot springs at Yumthang were a blessing after hours of driving through sub-zero temperatures. Soaking in naturally warm water surrounded by snow-capped peaks — what a contrast!',
            'The local Sikkimese people are among the warmest I\'ve ever met. Sharing butter tea and thukpa with my driver\'s family in Lachung, hearing stories about life in the mountains, and watching the stars from a place with zero light pollution — these moments made the trip truly unforgettable.'
        ],
        highlights: [
            'Gurudongmar Lake at 17,800 ft',
            'Yumthang Valley — Valley of Flowers',
            'Zero Point at 15,300 ft',
            'Hot springs at Yumthang',
            'Lachen & Lachung mountain villages',
            'Butter tea with locals & stargazing'
        ],
        tags: ['Mountains', 'Adventure', 'Road Trip', 'Himalaya']
    },
    {
        id: 4,
        slug: 'manali',
        title: 'Snow, Pines & Mountain Dreams',
        location: 'Manali, Himachal Pradesh',
        date: 'December 2024',
        coverImage: manali,
        summary: 'Chasing snow and serenity in the heart of the Himalayas — from Solang Valley to Old Manali\'s bohemian charm.',
        description: [
            'Manali in December is a winter wonderland straight out of a postcard. The moment I stepped out of the bus at the mall road, the crisp mountain air hit my face and I knew this was going to be special. Fresh snow covered everything — the rooftops, the pine trees, even the stray dogs seemed to enjoy the white blanket.',
            'Solang Valley was pure adrenaline. I tried skiing for the first time and spent more time falling than standing, but the laughter made it worth every tumble. The cable car ride to the top of the valley offered panoramic views of snow-covered peaks that stretched as far as the eye could see.',
            'Old Manali has a completely different vibe from the tourist-heavy mall road. Narrow paths lined with quirky cafés, bookshops, and backpacker hostels gave it an almost European village feel. I spent an entire afternoon at a riverside café, reading a book and watching the Beas River rush past — sometimes the best travel moments are the quiet ones.',
            'The drive to Rohtang Pass was an adventure in itself. At 13,050 feet, the pass was covered in thick snow, and the views of the Pir Panjal range were jaw-dropping. We had a snowball fight at the top, built a lopsided snowman, and drank the hottest chai of my life from a roadside stall.'
        ],
        highlights: [
            'Skiing & snowboarding at Solang Valley',
            'Rohtang Pass at 13,050 ft',
            'Old Manali cafe-hopping & Beas River',
            'Hadimba Temple in the cedar forest',
            'Jogini Waterfall trek',
            'Hot chai & maggi at mountain stalls'
        ],
        tags: ['Snow', 'Adventure', 'Cafés', 'Mountains']
    }
];

export default travelPosts;

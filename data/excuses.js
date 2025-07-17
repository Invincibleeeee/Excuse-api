const excuses = [
  // ===================== WORK =====================
  { text: "My laptop updated for 4 hours straight.", category: "work" },
  { text: "I was stuck in a meeting that could've been an email.", category: "work" },
  { text: "The office coffee gave me food poisoning.", category: "work" },
  { text: "I lost track of time while brainstorming in the shower.", category: "work" },
  { text: "I had a Zoom call with a client from 1997.", category: "work" },
  { text: "My boss gave me the wrong deadline.", category: "work" },
  { text: "Power outage due to pigeon invasion.", category: "work" },
  { text: "I accidentally deleted the project folder.", category: "work" },
  { text: "My cat walked on the keyboard and sent unfinished code.", category: "work" },
  { text: "I joined the wrong video call and stayed for an hour.", category: "work" },
  { text: "My chair broke mid-typing and I took it as a sign.", category: "work" },
  { text: "I had a severe case of 'not today'-itis.", category: "work" },
  { text: "The new intern unplugged the server.", category: "work" },
  { text: "Slack crashed and so did my will to work.", category: "work" },
  { text: "My productivity got stolen by a TikTok algorithm.", category: "work" },
  { text: "I was mentoring a junior... emotionally.", category: "work" },
  { text: "I couldn't find the Wi-Fi password, again.", category: "work" },
  { text: "I thought it was a public holiday in our timezone.", category: "work" },
  { text: "My calendar app was stuck in 2020.", category: "work" },
  { text: "I was emotionally unavailable for deadlines.", category: "work" },

  // ===================== SCHOOL =====================
  { text: "I stapled my homework to my pet parrot. It flew away.", category: "school" },
  { text: "I forgot it at home, like every generation before me.", category: "school" },
  { text: "I accidentally submitted a blank Google Doc.", category: "school" },
  { text: "My little brother used my homework as coloring paper.", category: "school" },
  { text: "The power went out right before I clicked 'submit'.", category: "school" },
  { text: "My assignment is on the blockchain. Trust me.", category: "school" },
  { text: "I was attending online class with my eyes closed.", category: "school" },
  { text: "I spilled tea all over my math notes.", category: "school" },
  { text: "I joined the wrong Google Meet for 3 hours.", category: "school" },
  { text: "My science project exploded. Literally.", category: "school" },
  { text: "I got distracted learning how to make excuses.", category: "school" },
  { text: "I fell asleep while watching an educational video.", category: "school" },
  { text: "I misread the deadline because of a font issue.", category: "school" },
  { text: "The printer jammed and started smoking.", category: "school" },
  { text: "My pen ran out of ink and so did my motivation.", category: "school" },
  { text: "I submitted the wrong file named 'final_final_realfinal.docx'.", category: "school" },
  { text: "The dog didn’t eat my homework — it edited it.", category: "school" },
  { text: "I lost marks for 'plagiarizing' my own work.", category: "school" },
  { text: "The app crashed while uploading the assignment.", category: "school" },
  { text: "I accidentally uploaded memes instead of the essay.", category: "school" },

  // ===================== TECH =====================
  { text: "My laptop froze mid-click and never came back.", category: "tech" },
  { text: "My charger short-circuited my motivation.", category: "tech" },
  { text: "My mouse stopped moving and so did I.", category: "tech" },
  { text: "The blue screen of death actually killed my vibe.", category: "tech" },
  { text: "My PC restarted for updates and forgot to wake up.", category: "tech" },
  { text: "I was fighting bugs... real ones, in my room.", category: "tech" },
  { text: "The code was working on my system. I swear.", category: "tech" },
  { text: "The Wi-Fi router overheated from memes.", category: "tech" },
  { text: "My phone went into airplane mode and never landed.", category: "tech" },
  { text: "I dropped my phone in tea — again.", category: "tech" },
  { text: "The internet was down, but my spirit was up (for a while).", category: "tech" },
  { text: "I mistyped a single character and crashed the build.", category: "tech" },
  { text: "Git deleted all my work because I typed `git gud`.", category: "tech" },
  { text: "I coded myself into a corner and couldn’t escape.", category: "tech" },
  { text: "I used ChatGPT and now I don't understand my own project.", category: "tech" },
  { text: "My keyboard battery died mid-sentence.", category: "tech" },
  { text: "VS Code crashed... along with my confidence.", category: "tech" },
  { text: "My VPN connected me to Antarctica.", category: "tech" },
  { text: "My extension cord rebelled.", category: "tech" },
  { text: "Windows updated and erased my timeline.", category: "tech" },

  // ===================== TRANSPORT =====================
  { text: "The train left 2 minutes before I arrived.", category: "transport" },
  { text: "There was a cow traffic jam. Rural problems.", category: "transport" },
  { text: "My Uber driver went to a parallel universe.", category: "transport" },
  { text: "I got into a cab but forgot my wallet halfway.", category: "transport" },
  { text: "I took the wrong bus and ended up in another district.", category: "transport" },
  { text: "My cycle chain snapped mid-pedal.", category: "transport" },
  { text: "There was a flat tire situation with a lot of drama.", category: "transport" },
  { text: "The metro was overcrowded and I turned back.", category: "transport" },
  { text: "My rickshaw broke down near a tea stall.", category: "transport" },
  { text: "Heavy traffic due to a movie shoot.", category: "transport" },
  { text: "I lost my way using Google Maps.", category: "transport" },
  { text: "I ran out of petrol and motivation.", category: "transport" },
  { text: "My friend was giving me a ride. Bad decision.", category: "transport" },
  { text: "My cab refused online payment mid-trip.", category: "transport" },
  { text: "I was stuck at a train crossing that never ended.", category: "transport" },
  { text: "I forgot my helmet and got caught by traffic police.", category: "transport" },
  { text: "I missed the only bus that comes every 3 hours.", category: "transport" },
  { text: "There was a giant pothole... and now a flat tire.", category: "transport" },
  { text: "The e-bike app was down.", category: "transport" },
  { text: "My battery scooter ran out of charge mid-bridge.", category: "transport" },

  // ===================== WEATHER =====================
  { text: "Rain was falling horizontally — couldn’t step out.", category: "weather" },
  { text: "A dust storm turned my face into a sandpaper.", category: "weather" },
  { text: "It was 46°C and my soul melted.", category: "weather" },
  { text: "Monsoon floods made roads disappear.", category: "weather" },
  { text: "Lightning struck nearby and fried my modem.", category: "weather" },
  { text: "Hail the size of golf balls made me retreat.", category: "weather" },
  { text: "It rained exactly when I stepped outside.", category: "weather" },
  { text: "The fog was so thick I lost my front gate.", category: "weather" },
  { text: "Too humid to function like a human.", category: "weather" },
  { text: "I slipped in the mud and took it as a sign.", category: "weather" },
  { text: "Wind blew my umbrella and hopes away.", category: "weather" },
  { text: "Tsunami warning on the news... probably fake but still.", category: "weather" },
  { text: "Thunder scared my dog who scared me.", category: "weather" },
  { text: "There was an unexpected sandstorm.", category: "weather" },
  { text: "The sun was so harsh it felt personal.", category: "weather" },
  { text: "Water entered my house and my heart.", category: "weather" },
  { text: "My area turned into Venice overnight.", category: "weather" },
  { text: "Too cold. Body refused to move.", category: "weather" },
  { text: "Snow blocked the driveway... again.", category: "weather" },
  { text: "A tree fell on the road. Not joking.", category: "weather" },

  // ===================== FAMILY =====================
  { text: "I had to attend my cousin’s wedding. The third one.", category: "family" },
  { text: "Family emergency involving a pressure cooker.", category: "family" },
  { text: "My nephew swallowed a Lego again.", category: "family" },
  { text: "My grandpa needed tech support urgently.", category: "family" },
  { text: "My mom grounded me. I’m 24.", category: "family" },
  { text: "A relative arrived uninvited at 6am.", category: "family" },
  { text: "My dog got into a fight with the neighbor’s cat.", category: "family" },
  { text: "Family group drama exploded on WhatsApp.", category: "family" },
  { text: "Sibling took the only laptop in the house.", category: "family" },
  { text: "I was babysitting and got kidnapped by a toddler.", category: "family" },
  { text: "My dad used the Wi-Fi to download cricket highlights.", category: "family" },
  { text: "Family insisted on a surprise puja.", category: "family" },
  { text: "Had to drop auntie at the railway station.", category: "family" },
  { text: "Relative fainted after eating too much ghee.", category: "family" },
  { text: "My cousin broke their toe and their silence.", category: "family" },
  { text: "Parents took my charger and forgot where they kept it.", category: "family" },
  { text: "A relative thought it was a good time to move in.", category: "family" },
  { text: "My brother clogged the only toilet.", category: "family" },
  { text: "Unexpected joint family function.", category: "family" },
  { text: "I had to mediate a fight between my parents and Alexa.", category: "family" },

  // ===================== HEALTH =====================
  { text: "I had food poisoning from street momos.", category: "health" },

  {
    text: "I was kidnapped by pigeons in my dream and it felt too real to ignore.",
    category: "weird"
  },
  {
    text: "My evil twin logged in and caused chaos — not my fault.",
    category: "weird"
  },
  {
    text: "My fridge was making suspicious noises, had to investigate.",
    category: "weird"
  },
  {
    text: "I got trapped in my hoodie — it zipped itself shut.",
    category: "weird"
  },
  {
    text: "Time traveled to 3024 by accident, just came back.",
    category: "weird"
  },
  {
    text: "My pet rock rolled away and I had to chase it.",
    category: "weird"
  },
  {
    text: "I was writing an excuse and forgot I had a real problem.",
    category: "weird"
  },
  {
    text: "The Wi-Fi said it didn’t feel like working today.",
    category: "weird"
  },
  {
    text: "My door handle betrayed me and locked me inside.",
    category: "weird"
  },
  {
    text: "I joined a cult temporarily — don’t ask.",
    category: "weird"
  },
  {
    text: "I got lost in IKEA. Again.",
    category: "weird"
  },
  {
    text: "An owl outside challenged me to a staring contest.",
    category: "weird"
  },
  {
    text: "I was cursed by a fortune cookie yesterday.",
    category: "weird"
  },
  {
    text: "I accidentally replied to my own email and argued for an hour.",
    category: "weird"
  },
  {
    text: "My reflection winked at me — had to rethink everything.",
    category: "weird"
  },
  {
    text: "A random app said it’s not my day today, I trust it.",
    category: "weird"
  },
  {
    text: "My keyboard started typing Latin on its own.",
    category: "weird"
  },
  {
    text: "I was trying to be productive but the universe disagreed.",
    category: "weird"
  },
  {
    text: "My horoscope warned me not to attend anything important.",
    category: "weird"
  },
  {
    text: "A ghost borrowed my charger and now I can’t find it.",
    category: "weird"
  }

];

export interface Release {
  title: string;
  cover: string;
  year?: string;
  note?: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface NewsItem {
  source: string;
  headline: string;
  href: string;
  image?: string;
}

export interface Artist {
  slug: string;
  name: string;
  role: string;
  hometown: string;
  heroPhoto: string;
  portraitPhoto: string;
  tagline: string;
  bio: string[];
  musicHubLabel: string;
  musicHubHref: string;
  releases: Release[];
  socials: SocialLink[];
  press: NewsItem[];
}

export const ARTISTS: Record<string, Artist> = {
  "eric-benet": {
    slug: "eric-benet",
    name: "ERIC BENÉT",
    role: "President · Recording Artist",
    hometown: "Milwaukee, WI · Based in Los Angeles",
    heroPhoto: "/photos/eric-benet-hero.jpg",
    portraitPhoto: "/photos/eric-benet-portrait.jpg",
    tagline:
      "Four-time Grammy-nominated singer, songwriter, and producer — and co-founder of JBR Creative Group.",
    bio: [
      "Eric Benét is one of R&B's most enduring voices. Across nearly three decades and eight studio albums, he has built a catalog defined by rich neo-soul vocals, classic songwriting, and an unmistakable warmth — songs like \u201cSpend My Life with You,\u201d \u201cSometimes I Cry,\u201d \u201cSpiritual Thang,\u201d and \u201cFemininity\u201d remain staples of the genre.",
      "As President of JBR Creative Group, Eric channels that experience into developing the next generation of artists and stories. The label\u2019s mission \u2014 to champion an equal playing field for artists \u2014 is rooted in his own decades navigating the major-label system as both performer and creator.",
      "His most recent project, the Duets album, brings him together with Chant\u00e9 Moore, Tamia, and other peers for a collection of contemporary R&B reimaginings.",
    ],
    musicHubLabel: "ericbenet.lnk.to/music",
    musicHubHref: "https://ericbenet.lnk.to/music",
    releases: [
      {
        title: "Duets",
        cover: "/covers/eric-benet-duets-cover.png",
        year: "2024",
        note: "with Chant\u00e9 Moore, Tamia & more",
        href: "https://ericbenet.lnk.to/duets",
      },
      {
        title: "Eric Benét — Full Catalog",
        cover: "/covers/eric-benet-duets.png",
        note: "All albums & singles",
        href: "https://ericbenet.lnk.to/music",
      },
    ],
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/ericbenet/" },
      { label: "Spotify", href: "https://open.spotify.com/artist/72DdyChH8L4SOX9wVbRGRA" },
      { label: "Apple Music", href: "https://music.apple.com/us/artist/eric-benet/3996865" },
      { label: "YouTube", href: "https://www.youtube.com/@ericbenetofficial" },
    ],
    press: [
      {
        source: "BILLBOARD",
        headline: "Eric Benét & Alison Ball Launch JBR Creative Group",
        href: "https://www.billboard.com/pro/eric-benet-alison-ball-jbr-creative-group/",
        image: "/news/billboard-jbr-launch.png",
      },
    ],
  },

  "joe-leone": {
    slug: "joe-leone",
    name: "JOE LEONE",
    role: "Recording Artist",
    hometown: "New Jersey · Based in Los Angeles",
    heroPhoto: "/photos/joe-leone-jbr.jpg",
    portraitPhoto: "/photos/joe-leone.jpg",
    tagline:
      "A New Jersey-born singer-songwriter blending classic soul phrasing with modern R&B production.",
    bio: [
      "Joe Leone writes from the place where vintage soul meets the way young artists actually live and love today. His releases have earned a steady drumbeat of press coverage and an increasingly devoted listener base across streaming platforms.",
      "Singles like \u201cWhere Have You Been,\u201d \u201cGod\u2019s Favorite,\u201d \u201cThe Gift\u201d (with Astyn Turr), \u201cInvited,\u201d and \u201cDiscipline\u201d trace a steadily widening artistic range \u2014 from intimate ballads to grooves built for the car stereo.",
      "Joe is one of JBR Creative Group\u2019s flagship developing artists, with new music continuing to roll out across 2025.",
    ],
    musicHubLabel: "joeleone.lnk.to/music",
    musicHubHref: "https://joeleone.lnk.to/music",
    releases: [
      {
        title: "God\u2019s Favorite",
        cover: "/covers/joe-leone-gods-favorite.jpg",
        year: "2025",
        href: "https://joeleone.lnk.to/music",
      },
      {
        title: "Where Have You Been",
        cover: "/covers/joe-leone-where-have-you-been.jpg",
        year: "2025",
        href: "https://joeleone.lnk.to/music",
      },
      {
        title: "The Gift",
        cover: "/covers/joe-leone-the-gift.jpg",
        note: "with Astyn Turr",
        href: "https://joeleone.lnk.to/music",
      },
      {
        title: "Invited",
        cover: "/covers/joe-leone-invited.jpg",
        href: "https://joeleone.lnk.to/music",
      },
      {
        title: "Discipline",
        cover: "/covers/joe-leone-discipline.jpg",
        href: "https://joeleone.lnk.to/music",
      },
      {
        title: "Over Under / Save Face",
        cover: "/covers/joe-leone-over-under.png",
        href: "https://joeleone.lnk.to/music",
      },
    ],
    socials: [
      { label: "All Streaming Platforms", href: "https://joeleone.lnk.to/music" },
      { label: "Instagram", href: "https://www.instagram.com/joeleonemusic/" },
      { label: "TikTok", href: "https://www.tiktok.com/@joeleonemusic" },
      { label: "YouTube", href: "https://www.youtube.com/@joeleonemusic" },
    ],
    press: [
      {
        source: "RATED R&B",
        headline: "Joe Leone Finds Love at Last on \u201cWhere Have You Been\u201d",
        href: "https://ratedrnb.com/2025/05/joe-leone-where-have-you-been/",
        image: "/news/rated-rnb-billboard.png",
      },
      {
        source: "RATED R&B",
        headline: "Joe Leone Shares New Song \u201cGod\u2019s Favorite\u201d",
        href: "https://ratedrnb.com/2025/08/joe-leone-shares-new-song-gods-favorite/",
        image: "/news/rated-rnb-eric-chante.png",
      },
    ],
  },

  "autumn-paige": {
    slug: "autumn-paige",
    name: "AUTUMN PAIGE",
    role: "Recording Artist",
    hometown: "Los Angeles, CA",
    heroPhoto: "/photos/autumn-paige-portrait.jpg",
    portraitPhoto: "/photos/autumn-paige-jbr.jpg",
    tagline:
      "A rising LA-based artist whose sound is \u201cpop \u2014 but soulful.\u201d Relatable, heartfelt, and built for repeat plays.",
    bio: [
      "Autumn Paige is a Los Angeles\u2013based singer and songwriter whose music sits at the intersection of pop accessibility and soulful honesty. Her writing draws from real life \u2014 the kind of relatable, heart-on-sleeve storytelling that turns listeners into fans.",
      "She is currently developing her catalog with industry veterans including Emile Ghantous and Simon Fuller, with Eric Ben\u00e9t and JBR Creative Group taking her on as a primary focus across 2024 and 2025.",
      "Recent singles include \u201cAltar,\u201d \u201cTopless,\u201d and \u201cBaggage,\u201d with more new music on the way.",
    ],
    musicHubLabel: "Listen on Spotify",
    musicHubHref:
      "https://open.spotify.com/artist/2Fb9GeVx07GAvFx4htGCLu",
    releases: [
      {
        title: "Altar",
        cover: "/photos/autumn-paige-portrait.jpg",
        href: "https://open.spotify.com/artist/2Fb9GeVx07GAvFx4htGCLu",
      },
      {
        title: "Topless",
        cover: "/photos/autumn-paige-portrait.jpg",
        href: "https://open.spotify.com/artist/2Fb9GeVx07GAvFx4htGCLu",
      },
      {
        title: "Baggage",
        cover: "/photos/autumn-paige-portrait.jpg",
        href: "https://open.spotify.com/artist/2Fb9GeVx07GAvFx4htGCLu",
      },
    ],
    socials: [
      { label: "Instagram", href: "https://instagram.com/theautumnpaige" },
      { label: "TikTok", href: "https://www.tiktok.com/@theautumnpaige" },
      { label: "YouTube", href: "https://www.youtube.com/@daautumnpaige" },
      { label: "X / Twitter", href: "https://twitter.com/theautumnpaigem" },
      {
        label: "Spotify",
        href: "https://open.spotify.com/artist/2Fb9GeVx07GAvFx4htGCLu",
      },
      {
        label: "EPK (PDF)",
        href: "https://www.aspiremusicgroup.com/s/AUTUMN-EPK.pdf",
      },
      {
        label: "Aspire Music Group",
        href: "https://www.aspiremusicgroup.com/autumnpaige",
      },
    ],
    press: [],
  },
};

export const ARTIST_ORDER: string[] = [
  "eric-benet",
  "autumn-paige",
  "joe-leone",
];

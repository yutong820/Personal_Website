import { BlogPost } from "../models/blogPost";

export const blogs: Array<BlogPost> = [
    {
      id: 1,
      title: "This is my story, so far...",
      description: "The story of how I started write my first lines of code",
      author: "Gabriele Gatti",
      topics: ["about-me", "hi", "stories"],
      link: "/blog/stories/this-is-my-story"
    },
    {
      id: 2,
      title: "University or not?",
      description: "Discussing the pros and cons of attending a university",
      author: "Gabriele Gatti",
      topics: ["university", "education", "future"],
      link: "/blog/education/university-or-not"
    },
    {
      id: 3,
      title: "Italian Basketball team journey",
      description: "Commenting about the journey of the italian basketball team in the 2023 FIBA world cup",
      author: "Gabriele Gatti",
      topics: ["basketball", "sport", "world-cup", "FIBA"],
      link: "/blog/sport/italian-basketball-team-journey"
    },
    {
      id: 4,
      title: "Italy is not for young people",
      description: "Analizing the reasons why it is hard to be young in Italy",
      author: "Gabriele Gatti",
      topics: ["stories", "italy", "young people"],
      link: "/blog/stories/italy-is-not-for-young-people"
    },
    {
      id: 5,
      title: "Why I like Angular so much",
      description: "Describing the reasons why I love Angular and why you may love it too",
      author: "Gabriele Gatti",
      topics: ["angular", "programming", "web-development"],
      link: "/blog/programming/why-i-love-angular"
    },
    {
      id: 6,
      title: "Why Boom Beach is better than Clash of Clans",
      description: "Describing the reasons why I think Boom Beach is superior than Clash of Clans.",
      author: "Gabriele Gatti",
      topics: ["gaming", "boom beach", "clash of clans"],
      link: "/blog/gaming/why-boom-beach-is-better-than-clash-of-clans"
    }
  ]
//@flow

type PodcastType = {
    id:number,
    name:string,
    description:string
}

class PodObject {
  id:number;
  name:string;
  description:string;

  constructor (podcast:PodcastType) {
    this.id = podcast.id;
    this.name = podcast.name;
    this.description = podcast.description;
  }
}

export default PodObject;

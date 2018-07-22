export class Card {
  public static baseImgUrl = `https://fakeimg.pl/`;
  id: string;
  theme: CardTheme;
  header: CardHeader;
  body: CardBody;
  footer: CardFooter;

  public static create(json: any): Card {
    const card = new Card();
    card.id = json.id;
    card.theme = CardTheme.create(json.themeData);
    card.header = CardHeader.create(json.header);
    card.footer = CardFooter.create(json.footer);
    card.body = CardBody.create(json.body);
    return card;
  }
}

export class CardHeader {
  name: string;
  color: string;
  public static create(json: any): CardHeader {
    const header = new CardHeader();
    header.name = json.name;
    header.color = json.color;
    return header;
  }
}

export class CardTheme {
  name: string;
  color: string;
  public static create(json: any): CardTheme {
    const theme = new CardTheme();
    theme.color = json.color;
    theme.name = json.theme;
    return theme;
  }
}

export class CardBody {
  description: string;
  image: string;
  mechanics: CardMechanics;
  public static create(json: any): CardBody {
    const body = new CardBody();
    body.description = json.description;
    body.image = Card.baseImgUrl + json.image;
    body.mechanics = CardMechanics.create(json.mechanics);
    return body;
  }
}

export class CardMechanics {
  type: string;
  details: CardMechanicsDetails[];
  public static create(json: any): CardMechanics {
    const mechanics = new CardMechanics();
    mechanics.details = CardMechanicsDetails.create(json.details);
    mechanics.type = json.type;
    return mechanics;
  }
}

export class CardMechanicsDetails {
  image: string;
  text: string;
  public static create(jsonArray: any): CardMechanicsDetails[] {
    const array: CardMechanicsDetails[] = [];
    jsonArray.forEach(element => {
      const obj = new CardMechanicsDetails();
      obj.image = Card.baseImgUrl + element.image;
      obj.text = element.text;
      array.push(obj);
    });
    return array;
  }
}

export class CardFooter {
  number: string;
  buttons: ContentServiceLayer[];
  public static create(json: any): CardFooter {
    const footer = new CardFooter();
    footer.number = json.number;
    footer.buttons = ContentServiceLayer.create(json.contentServicesLayer);
    return footer;
  }
}

export class ContentServiceLayer {
  name: string;
  color: string;
  public static create(jsonArray: any): ContentServiceLayer[] {
    const array: ContentServiceLayer[] = [];
    jsonArray.forEach(element => {
      const footer = new ContentServiceLayer();
      footer.name = element.name;
      footer.color = element.color;
      array.push(footer);
    });
    return array;
  }
}

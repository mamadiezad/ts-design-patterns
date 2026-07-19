/**
 * Adapter Pattern
 * Allows incompatible interfaces to work together.
 */

// Target interface (what the client expects)
interface JsonApi {
  fetchData(): Record<string, unknown>;
}

// Adaptee (incompatible interface)
export class XmlService {
  getXmlData(): string {
    return "<data><name>John</name><age>30</age></data>";
  }
}

// Adapter
export class XmlToJsonAdapter implements JsonApi {
  private xmlService: XmlService;

  constructor(xmlService: XmlService) {
    this.xmlService = xmlService;
  }

  fetchData(): Record<string, unknown> {
    const xml = this.xmlService.getXmlData();
    // Simple XML to JSON conversion (simplified)
    const result: Record<string, unknown> = {};
    const nameMatch = xml.match(/<name>(.*?)<\/name>/);
    const ageMatch = xml.match(/<age>(.*?)<\/age>/);

    if (nameMatch) result.name = nameMatch[1];
    if (ageMatch) result.age = parseInt(ageMatch[1], 10);

    return result;
  }
}

// Client
export class DataConsumer {
  private api: JsonApi;

  constructor(api: JsonApi) {
    this.api = api;
  }

  display(): string {
    const data = this.api.fetchData();
    return `Data: ${JSON.stringify(data)}`;
  }
}

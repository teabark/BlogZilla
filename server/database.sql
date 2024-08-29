CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    f_name VARCHAR(255) NOT NULL,
    l_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    topic VARCHAR(20) NOT NULL,
    title  VARCHAR(50) NOT NULL,
    post_date TIMESTAMP,
    post_content TEXT NOT NULL
);

INSERT INTO post (user_id, topic, title, post_content)
VALUES (
    '2279fb21-0302-4de7-a54b-e049d215bb35',
    'sports',
    'Man United 1-0 Fulham: Joshua Zirkzee strikes late on dream debut to secure
     dramatic opening day victory and spare Red Devils blushes after host of missed chances',
     'A low cross from the right and a poke with the left foot from a new signing. In an instant a game was won and an 
     evening transformed. Welcome to Manchester United Joshua Zirkee.For 87 minutes this had been another United 
     performance taken from the vaults of last season. Some light and some shade but nothing that had been consistently 
     impressive or good enough. Manager Erik ten Hag had said his team were not ready for the new season and he was in danger
     of being proved right. A draw here and the mood music of last season would have been back.But if Uniteds newly assembled 
    football department have tried to do one thing this summer it has been to add depth to Ten Hags squad. Zirkee is
       a 23-year-old Dutch forward signed from Bologna and though he started the night among the substitutes here, he emerged 
       to deliver the kind of impact we all dream about as schoolkids.'
)


INSERT INTO post (topic, title, post_content)
VALUES
  ('sports', 'Champions League Final: Liverpool vs. Real Madrid', 'Liverpool and Real Madrid face off in a thrilling Champions League final, with both teams showcasing their star players. The match promises to be an exciting conclusion to the European season.'),
  ('sports', 'NBA Finals: Golden State Warriors Win Game 7', 'In a dramatic Game 7, the Golden State Warriors clinch the NBA Championship with a last-minute three-pointer by Stephen Curry. A game to remember for basketball fans.'),
  ('sports', 'Tokyo Olympics: Usain Bolt Breaks World Record', 'Usain Bolt once again makes history by breaking his own world record in the 100m sprint at the Tokyo Olympics. Fans celebrate the Jamaican sprinter’s incredible performance.'),
  ('sports', 'NFL Draft: Top Picks and Surprises', 'The NFL Draft reveals the top picks for the new season, with several surprising selections and trades that shake up team strategies for the upcoming year.'),
  ('sports', 'Formula 1: Hamilton Wins Monaco Grand Prix', 'Lewis Hamilton secures a stunning victory at the Monaco Grand Prix, overcoming a series of challenges and rival drivers to take the top spot on the podium.');

INSERT INTO post (topic, title, post_content)
VALUES
  ('technology', 'Apple Unveils New iPhone 15', 'Apple announces the release of the iPhone 15, featuring improved camera capabilities, a faster processor, and a new design. Tech enthusiasts eagerly await the launch.'),
  ('technology', 'Google Announces Quantum Computing Breakthrough', 'Google reveals a major breakthrough in quantum computing, claiming to achieve quantum supremacy. This advancement could revolutionize computing power and technology.'),
  ('technology', 'Microsoft Launches Windows 12', 'Microsoft introduces Windows 12, offering enhanced security features, a more intuitive interface, and better integration with cloud services. Users look forward to the new OS.'),
  ('technology', 'Tesla Reveals New Electric Truck', 'Tesla unveils its latest electric truck model, promising increased range, better performance, and advanced features for both consumers and businesses.'),
  ('technology', 'Amazons New AI Assistant Enhances Smart Home Devices', 'Amazon introduces a new version of its AI assistant, integrating more seamlessly with smart home devices and offering improved voice recognition and automation capabilities.');

INSERT INTO post (topic, title, post_content)
VALUES
  ('business', 'Stock Market Hits Record Highs', 'The stock market reaches new record highs, driven by strong economic data and corporate earnings reports. Investors are optimistic about the future.'),
  ('business', 'Tech Giants Merge: What It Means for the Industry', 'Two major tech giants announce a merger, creating a powerhouse in the industry. Analysts discuss the implications for competition and innovation.'),
  ('business', 'Global Supply Chain Disruptions Continue', 'Ongoing global supply chain disruptions impact various industries, leading to delays and increased costs for businesses and consumers alike.'),
  ('business', 'Startup Raises $100 Million in Funding Round', 'A promising startup secures $100 million in its latest funding round, attracting interest from major investors and signaling growth potential in its sector.'),
  ('business', 'Retail Giants Embrace E-Commerce Strategies', 'Retail giants adapt to changing market conditions by enhancing their e-commerce strategies, focusing on online sales and digital transformation.');

INSERT INTO post (topic, title, post_content)
VALUES
  ('politics', 'New Legislation Introduced in Congress', 'Congress introduces new legislation aimed at addressing key national issues, including healthcare and infrastructure. The bill sparks debate among lawmakers.'),
  ('politics', 'Election Results: Key Takeaways', 'The latest election results reveal significant shifts in political power. Analysts provide insights into the results and their potential impact on future policies.'),
  ('politics', 'International Summit on Climate Change', 'World leaders gather for an international summit on climate change, discussing strategies and agreements to combat global environmental challenges.'),
  ('politics', 'Controversial Policy Sparks Public Protests', 'A newly proposed policy sparks widespread public protests, with citizens voicing concerns and demands for changes to the proposed regulations.'),
  ('politics', 'Government Shutdown Looms: What to Expect', 'The threat of a government shutdown looms as budget negotiations reach a standstill. What are the potential consequences for federal services and employees?');
import showdown from "showdown";
import { api, list, user } from "scripts/trello/variables";

const trello = (target) =>
  `${api.base}${target}?key=${api.key}&token=${user.token}`;

const trelloCards = (target) => trello(`list/${target}/cards/`);

const trelloAttachments = (target) => trello(`cards/${target}/attachments`);

const trelloActions = (target) => trello(`cards/${target}/actions`);

const readmore = (value) => {
  const result = value.filter(({ name }) => name === "Read more")[0];
  return result !== undefined ? result : null;
};

const prepLabels = (target) =>
  !target.length
    ? [{ name: "Personal", color: "grey" }]
    : target.map(({ name, color }) => ({ name, color }));

const shuffleArray = () => array.sort(() => Math.random() - 0.5);

const removeHero = (name) => name && name.replace("Hero: ", "");

const makeHtml = (target) => new showdown.Converter().makeHtml(target);

const cardType = (target) => {
  const { pages, roles, projects, education } = list;
  switch (target) {
    case pages:
      return "pages";
    case roles:
      return "roles";
    case projects:
      return "projects";
    case education:
      return "education";
    default:
      return "hero";
  }
};

export {
  removeHero,
  makeHtml,
  cardType,
  readmore,
  prepLabels,
  shuffleArray,
  trello,
  trelloCards,
  trelloAttachments,
  trelloActions,
};

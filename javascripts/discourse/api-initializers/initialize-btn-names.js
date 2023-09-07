import { apiInitializer } from "discourse/lib/api";
import discourseComputed from "discourse-common/utils/decorators";

const TRANSLATION_KEYS = {
  "Image Critiques": "critiques",
  "Abstract Nature Critiques": "critiques",
  "Avian Critiques": "critiques",
  "Human & Fauna Critiques": "critiques",
  "Flora Critiques": "critiques",
  "Landscape Critiques": "critiques",
  "Macro/Close-up Critiques": "critiques",
  "Nightscape & Astro Critiques": "critiques",
  "Non-Nature Critiques": "critiques",
  "Wildlife Critiques": "critiques",
  "Weekly Challenge": "critiques",
  "Image Critiques": "critiques",
  "Project Critiques": "project-critiques",
  "New Member Images": "images",
  "New Member Questions/Help": "help",
  "Discussions": "discussions",
  "Introductions": "introductions",
  "Image Processing Challenge": "processing-challenge",
  "Pro Image Critiques": "critiques",
  "Pro Discussions": "discussions",
  "Pro Project Critiques": "project-critiques",
};

export default apiInitializer("0.8", (api) => {
  api.modifyClass("component:d-navigation", {
     pluginId: "category-btn-name",
    
    @discourseComputed("hasDraft", "category")
    createTopicLabel(hasDraft, category) {
      if (!hasDraft && category && TRANSLATION_KEYS[category.name]) {
        return themePrefix(TRANSLATION_KEYS[category.name]);
      } else {
        return this._super(hasDraft);
      }
    },
  });
});

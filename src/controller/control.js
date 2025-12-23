import techs from "../data/techs.js";
import experiences from "../data/experiences.js";
import projects from "../data/projects.js";

export function home(req, res) {    
  res.render("layouts/main", { 
    layout: false, 
    techs: techs(),
    experiences: experiences(),
    projects: projects(),
});
}
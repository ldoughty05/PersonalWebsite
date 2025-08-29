import json

def create_new_json_from_depricated_one():
  with open('src/features/projects/projects.json', 'r') as file:
    data = json.load(file)

  new_json = []
  for project in data.get("projects", []):
    formatted_project = {
      "title": project["title"],
      "bullet_points": project.get("bullet_points", []),
      "start_date": f"{project.get('year', '')}-01-01",
      "end_date": f"{project.get('year', '')}-05-01",
      "skills": [{"name": skill} for skill in project.get("skills", [])],
      "links": {
        "demo": project.get("demo_link", ""),
        "source": project.get("source_link", ""),
        "article": project.get("article_link", "")
      },
      "isImportant": False,

    }

    print(f"reformatted project: {formatted_project['title']}")
    new_json.append(formatted_project)
  return new_json



if __name__ == "__main__":
    new_json = create_new_json_from_depricated_one()
    with open('src/features/projects/projects_fallback.json', 'w') as outfile:
      json.dump(new_json, outfile, indent=2)
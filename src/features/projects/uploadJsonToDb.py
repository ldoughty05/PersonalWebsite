import requests
import json

USERNAME = ""
PASSWORD = ""

def authenticate_fastresume():
  try:
    response = requests.post(url="https://api.fastresume.org/api/token/", json={"username": USERNAME, "password": PASSWORD})
    return response.json().get("access")
  except requests.exceptions.RequestException as e:
    print(f"Error authenticating with FastResume API: {e}")

def post_projects_to_fastresume(access_token):
  with open('src/features/projects/projects.json', 'r') as file:
    data = json.load(file)

  for project in data.get("projects", []):
    formatted_project = {
      "title": project["title"],
      "bullet_points": project.get("bullet_points", []),
      "start_date": f"{project.get('year', '')}-01-01",
      "end_date": f"{project.get('year', '')}-05-01",
      "skills_input_list": project.get("skills", []),
      "links": {
        "demo": project.get("demo_link", ""),
        "source": project.get("source_link", ""),
        "article": project.get("article_link", "")
      },
    }
    print(f"Posted project: {formatted_project['title']} to FastResume API")
    # print("Formatted project data:", formatted_project)
    # print("\n\n")
    headers = {
      "Authorization": f"Bearer {access_token}",
      "Content-Type": "application/json"
    }
    try:
      response = requests.post(
        url="https://api.fastresume.org/api/experiences/projects/", 
        json=formatted_project,
        headers=headers
      )
    except requests.exceptions.RequestException as e:
      print(f"Error posting project {formatted_project['title']}: {e}")

    if response.status_code == 200 or response.status_code == 201:
      print("Success:", response.json())
    else:
        print("Fail", response.status_code)
        print(response.text)


if __name__ == "__main__":
  access = authenticate_fastresume()
  if access:
    post_projects_to_fastresume(access)
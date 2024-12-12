import openai
from django.conf import settings

client = openai.OpenAI(api_key=settings.OPENAI_API_KEY)

def generate_text(prompt):
    
    task_description = (
        "Please provide a detailed recipe, including ingredients, "
        "and a brief history for the following dish: " + prompt + '. please return json format with three fields (name, ingredients, instructions, history).  The ingredients field should be a list of strings. The history field should be a string. Name field should be a string.  The instructions field should be a list of strings.'
    )

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a knowledgeable chef and historian."},
            {"role": "user", "content": task_description}
        ]
    )
    
    response_text = response.choices[0].message.content.strip()
    print (response_text)
    return convert_openai_response_to_json(response_text)

def convert_openai_response_to_json(openai_response):
    # the openai api wraps the string result with some further markers when requesting
    # a json result in the prompt.
    # i.e,  ```json [ {"title":"title1"}]```
    # Remove the wrapper markers.
    if openai_response.startswith("```json"):
        openai_response = openai_response[7:]
    if openai_response.endswith("```"):
        openai_response = openai_response[:-3].strip()

    print(openai_response)
    # jsonResponse = json.loads(openai_response)
    return openai_response





    
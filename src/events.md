---
# Feel free to add content and custom Front Matter to this file.

layout: page
---
<div>
  {% for event in collections.events.resources %}
  <hr>
    <span>
      <h2>
        {{ event.data.title }}
      </h2>  
     <h3>{{ event.data.frequency }}</h3> 
    </span>
    {{ event.data.about}}
  <hr>
  {% endfor %}
</div>
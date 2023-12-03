What Is CSS Grid?
CSS Grid is a powerful tool that CSS gives us to easily align items and
create two-dimensional layouts.
• Grid and Flexbox are both part of CSS and can both be used in similar ways
• Flexbox was created first and has a bit more browser compatibility
• I would highly recommend learning both of them


----------------------------------------

Grid Containers & Grid Items
The grid container is the element that holds grid items. Grid items are direct
children of grid containers. A container is created with ---> display: grid

<div class="grid-container">
    <div> Grid Item 1</div>
    <div> Grid Item 2</div>
    <img src="pic.png" alt="also a grid item" />
</div>

# Grid Container Properties
grid-template columns
grid-template-rows
grid-gap
grid-auto-rows
grid-auto-columns
grid-template-areas
justify-content
align-items

# Grid Item Properties
grid-column
grid-row
grid-area
align-self
justify-self

# note:
align-items: for containers
align-self: for item


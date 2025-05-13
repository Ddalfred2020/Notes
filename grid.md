
# Grid

The css grid consist of horizontal rows and columns, we have different types of grid, we have the one by two grid, two by two grid etc  
The grid is a more flexible layout that is used to overcome the problem of alignment that is common with display inline-block which is common with div element when aligning elements horizontally.
to create a grid the following steps are take
```
display property is change to grid
display: grid;
grid-template-columns: 100px 100px 100px;
this tells grid to create three columns with 100px wide
```
when we use 1fr as the size of the column we are telling the grid to take up the remaining space, fr means free space, we can also use 2fr and so on it wiil act as a ratio, a grid is more ragid compared to a flex box in that if the position of the columns are change it affects the size of the columns
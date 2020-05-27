import React from 'react';
import { Pane, Text, Button, Heading, majorScale, Paragraph, Link, Strong, Small, Code, Icon, Pre, UnorderedList, ListItem, TextInput, SearchInput} from 'evergreen-ui'
import '../App.css';


function Nav(props) {
    return   (
    <div class="nav-container">
            <ul class="nav-list nav-list-larger">
                <li class="nav-item nav-item-hidden">
                </li>
                <li class="nav-item">
                    <a href="index.html" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="product.html" class="nav-link">Browse</a>
                </li>
                <li class="nav-item">
                    <a href="contact.html" class="nav-link">Contact</a>
                </li>
            </ul>
    </div>
    );
  }

  export default Nav;
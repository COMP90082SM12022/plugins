# Animation PDDL Generator plugin

This folder contains the plugin for http://editor.planning.domains.
This plugin complements the Planimation plugin by helping the user to generate the animation profile needed for planimation.

## Functionality
 - This pulgin is similar to the pddl generator plugin existing in editor.planning.domains, can add built in generators for different visualizations that are common in planning, which can help the user to write Animation Profile to visualise the planning problem. 
 - The plugin provides following functions
Function | Description
------------ | -------------
`Snippets` | The pulgin provides snippets that are common in animation profile syntax, which supports autocompletion (For example, when user types in "predicate" on the main panel, then the code block for predicate will be autocompleted )
`apInsert GUI` | The apInsert GUI button can be found on the top menu when the plugin is installed. We provides the GUI for 3 most common aspects of the animation profile, which are predicate, visual, image. Users can enter custom values based on the parameters provided, the completed code block will be generated once click insert. This GUI can also extracts key information from the domain file to make it easier for the user to write the file. In the Image section, the GUI supports multiple images uploading from local file (or directly drag the image for uploading) and can convert them with base64 sytle. The images will be displayed for review once upload. Detailed instructions is provided in the interface.


## How to use this plugin

1. Go to http://editor.planning.domains
2. Click plugin on the top menu and install Animation PDDL Generator plugin.
3. Wait the Animation PDDL Generator plugin is fully loaded.
4. We provide snippets for autocompletion of animation PDDL syntax,
5. and GUI for generating the 3 most common syntax (predicate, visual, image). The GUI can extract the infomation from the existing domian files to help writing animation profile, and converting uploaded images to be encoded with base64 style.
6. Then install Planimation plugin, upload domain, problem, animation profile to animation planning question.

## Futher Improvement 
1. Snippet can be implemented in the GUI.

## Thanks

The animation PDDL generator is developed by Longlin Wang, Tianyi Mo, Rubo Cai, Ruijie Pan, Haotian He under Nir Lipovetzky's guidance.

Any feedback, bug reports, comments, questions, or concerns can be sent to [Nir Lipovetzky], or the [issues tracker](https://github.com/planimation/plugins/issues).

[Nir Lipovetzky]:<mailto:nir.lipovetzky@unimelb.edu.au>

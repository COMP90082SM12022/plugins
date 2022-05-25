
About Domain file:

capture each predicate

/\((\w\W*\w*)+ ((\?\w+)|(\?\w+ - \w+)|(\?\w+ - \([\w\W]*\)))+\)/g


working in

(:predicates

        (walls-built ?s ?x)

        (?s1 - site ?s2 - site ?m -material)

        (windows-fitted ?s - site)

        (foundations-set ?s - site)

        (cables-installed ?s - site)

        (site-built ?s - (either wolf goat cabbage farmer))

        (onsite ?m - material ?s - site)

        (material-used ?m - material)

    )

==========================================================================================
capture fields in the predicate

"[?](\w)+([ ]|[)])?"

with positive lookahead

[?](\w)+(?=([ ]|[)]))

working in


(?s1 - site ?s2 - site ?m -material)


About Problem file 

 " (\w\W*\w*)+ - (\w+)([ ]|\n) "
 capture the parttern 
 
 obects - type
 
 eg. a b - atype
 
 
 ===========================================================
 
  "(\w\W*\w*)([ ]|\n)"
  
  capture objects
 


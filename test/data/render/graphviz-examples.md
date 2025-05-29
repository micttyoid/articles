# Test data: Graphviz examples

## Example: Keras

Used extension: graphviz

```[graphviz]
digraph G {
  fontname="Helvetica,Arial,sans-serif"
  node [fontname="Helvetica,Arial,sans-serif"]
  edge [fontname="Helvetica,Arial,sans-serif"]
  concentrate=True;
  rankdir=TB;
  node [shape=record];
  140087530674552 [label="title: InputLayer\n|{input:|output:}|{{[(?, ?)]}|{[(?, ?)]}}"];
  140087537895856 [label="body: InputLayer\n|{input:|output:}|{{[(?, ?)]}|{[(?, ?)]}}"];
  140087531105640 [label="embedding_2: Embedding\n|{input:|output:}|{{(?, ?)}|{(?, ?, 64)}}"];
  140087530711024 [label="embedding_3: Embedding\n|{input:|output:}|{{(?, ?)}|{(?, ?, 64)}}"];
  140087537980360 [label="lstm_2: LSTM\n|{input:|output:}|{{(?, ?, 64)}|{(?, 128)}}"];
  140087531256464 [label="lstm_3: LSTM\n|{input:|output:}|{{(?, ?, 64)}|{(?, 32)}}"];
  140087531106200 [label="tags: InputLayer\n|{input:|output:}|{{[(?, 12)]}|{[(?, 12)]}}"];
  140087530348048 [label="concatenate_1: Concatenate\n|{input:|output:}|{{[(?, 128), (?, 32), (?, 12)]}|{(?, 172)}}"];
  140087530347992 [label="priority: Dense\n|{input:|output:}|{{(?, 172)}|{(?, 1)}}"];
  140087530711304 [label="department: Dense\n|{input:|output:}|{{(?, 172)}|{(?, 4)}}"];
  140087530674552 -> 140087531105640;
  140087537895856 -> 140087530711024;
  140087531105640 -> 140087537980360;
  140087530711024 -> 140087531256464;
  140087537980360 -> 140087530348048;
  140087531256464 -> 140087530348048;
  140087531106200 -> 140087530348048;
  140087530348048 -> 140087530347992;
  140087530348048 -> 140087530711304;
}
```

## Example: parsing tree

Used extension: gv

```[gv]
##"I made a program to generate dot files representing the LR(0) state graph along with computed LALR(1) lookahead for an arbitrary context-free grammar, to make the diagrams I used in this article: http://blog.lab49.com/archives/2471. The program also highlights errant nodes in red if the grammar would produce a shift/reduce or reduce/reduce conflict -- you may be able to go to http://kthielen.dnsalias.com:8082/ to produce a graph more to your liking". Contributed by Kalani Thielen.

##Command to get the layout: "dot -Gsize=10,15 -Tpng thisfile > thisfile.png"

digraph g {
  fontname="Helvetica,Arial,sans-serif"
  node [fontname="Helvetica,Arial,sans-serif"]
  edge [fontname="Helvetica,Arial,sans-serif"]
  graph [fontsize=30 labelloc="t" label="" splines=true overlap=false rankdir = "LR"];
  ratio = auto;
  "state0" [ style = "filled, bold" penwidth = 5 fillcolor = "white" fontname = "Courier New" shape = "Mrecord" label =<<table border="0" cellborder="0" cellpadding="3" bgcolor="white"><tr><td bgcolor="black" align="center" colspan="2"><font color="white">State #0</font></td></tr><tr><td align="left" port="r0">&#40;0&#41; s -&gt; &bull;e $ </td></tr><tr><td align="left" port="r1">&#40;1&#41; e -&gt; &bull;l '=' r </td></tr><tr><td align="left" port="r2">&#40;2&#41; e -&gt; &bull;r </td></tr><tr><td align="left" port="r3">&#40;3&#41; l -&gt; &bull;'*' r </td></tr><tr><td align="left" port="r4">&#40;4&#41; l -&gt; &bull;'n' </td></tr><tr><td align="left" port="r5">&#40;5&#41; r -&gt; &bull;l </td></tr></table>> ];
  "state1" [ style = "filled" penwidth = 1 fillcolor = "white" fontname = "Courier New" shape = "Mrecord" label =<<table border="0" cellborder="0" cellpadding="3" bgcolor="white"><tr><td bgcolor="black" align="center" colspan="2"><font color="white">State #1</font></td></tr><tr><td align="left" port="r3">&#40;3&#41; l -&gt; &bull;'*' r </td></tr><tr><td align="left" port="r3">&#40;3&#41; l -&gt; '*' &bull;r </td></tr><tr><td align="left" port="r4">&#40;4&#41; l -&gt; &bull;'n' </td></tr><tr><td align="left" port="r5">&#40;5&#41; r -&gt; &bull;l </td></tr></table>> ];
  "state2" [ style = "filled" penwidth = 1 fillcolor = "white" fontname = "Courier New" shape = "Mrecord" label =<<table border="0" cellborder="0" cellpadding="3" bgcolor="white"><tr><td bgcolor="black" align="center" colspan="2"><font color="white">State #2</font></td></tr><tr><td align="left" port="r4">&#40;4&#41; l -&gt; 'n' &bull;</td><td bgcolor="grey" align="right">=$</td></tr></table>> ];
  "state3" [ style = "filled" penwidth = 1 fillcolor = "white" fontname = "Courier New" shape = "Mrecord" label =<<table border="0" cellborder="0" cellpadding="3" bgcolor="white"><tr><td bgcolor="black" align="center" colspan="2"><font color="white">State #3</font></td></tr><tr><td align="left" port="r5">&#40;5&#41; r -&gt; l &bull;</td><td bgcolor="grey" align="right">=$</td></tr></table>> ];
  "state4" [ style = "filled" penwidth = 1 fillcolor = "white" fontname = "Courier New" shape = "Mrecord" label =<<table border="0" cellborder="0" cellpadding="3" bgcolor="white"><tr><td bgcolor="black" align="center" colspan="2"><font color="white">State #4</font></td></tr><tr><td align="left" port="r3">&#40;3&#41; l -&gt; '*' r &bull;</td><td bgcolor="grey" align="right">=$</td></tr></table>> ];
  "state5" [ style = "filled" penwidth = 1 fillcolor = "black" fontname = "Courier New" shape = "Mrecord" label =<<table border="0" cellborder="0" cellpadding="3" bgcolor="black"><tr><td bgcolor="black" align="center" colspan="2"><font color="white">State #5</font></td></tr><tr><td align="left" port="r0"><font color="white">&#40;0&#41; s -&gt; e &bull;$ </font></td></tr></table>> ];
  "state6" [ style = "filled" penwidth = 1 fillcolor = "white" fontname = "Courier New" shape = "Mrecord" label =<<table border="0" cellborder="0" cellpadding="3" bgcolor="white"><tr><td bgcolor="black" align="center" colspan="2"><font color="white">State #6</font></td></tr><tr><td align="left" port="r1">&#40;1&#41; e -&gt; l &bull;'=' r </td></tr><tr><td align="left" port="r5">&#40;5&#41; r -&gt; l &bull;</td><td bgcolor="grey" align="right">$</td></tr></table>> ];
  "state7" [ style = "filled" penwidth = 1 fillcolor = "white" fontname = "Courier New" shape = "Mrecord" label =<<table border="0" cellborder="0" cellpadding="3" bgcolor="white"><tr><td bgcolor="black" align="center" colspan="2"><font color="white">State #7</font></td></tr><tr><td align="left" port="r1">&#40;1&#41; e -&gt; l '=' &bull;r </td></tr><tr><td align="left" port="r3">&#40;3&#41; l -&gt; &bull;'*' r </td></tr><tr><td align="left" port="r4">&#40;4&#41; l -&gt; &bull;'n' </td></tr><tr><td align="left" port="r5">&#40;5&#41; r -&gt; &bull;l </td></tr></table>> ];
  "state8" [ style = "filled" penwidth = 1 fillcolor = "white" fontname = "Courier New" shape = "Mrecord" label =<<table border="0" cellborder="0" cellpadding="3" bgcolor="white"><tr><td bgcolor="black" align="center" colspan="2"><font color="white">State #8</font></td></tr><tr><td align="left" port="r1">&#40;1&#41; e -&gt; l '=' r &bull;</td><td bgcolor="grey" align="right">$</td></tr></table>> ];
  "state9" [ style = "filled" penwidth = 1 fillcolor = "white" fontname = "Courier New" shape = "Mrecord" label =<<table border="0" cellborder="0" cellpadding="3" bgcolor="white"><tr><td bgcolor="black" align="center" colspan="2"><font color="white">State #9</font></td></tr><tr><td align="left" port="r2">&#40;2&#41; e -&gt; r &bull;</td><td bgcolor="grey" align="right">$</td></tr></table>> ];
  state0 -> state5 [ penwidth = 5 fontsize = 28 fontcolor = "black" label = "e" ];
  state0 -> state6 [ penwidth = 5 fontsize = 28 fontcolor = "black" label = "l" ];
  state0 -> state9 [ penwidth = 5 fontsize = 28 fontcolor = "black" label = "r" ];
  state0 -> state1 [ penwidth = 1 fontsize = 14 fontcolor = "grey28" label = "'*'" ];
  state0 -> state2 [ penwidth = 1 fontsize = 14 fontcolor = "grey28" label = "'n'" ];
  state1 -> state1 [ penwidth = 1 fontsize = 14 fontcolor = "grey28" label = "'*'" ];
  state1 -> state4 [ penwidth = 5 fontsize = 28 fontcolor = "black" label = "r" ];
  state1 -> state2 [ penwidth = 1 fontsize = 14 fontcolor = "grey28" label = "'n'" ];
  state1 -> state3 [ penwidth = 5 fontsize = 28 fontcolor = "black" label = "l" ];
  state6 -> state7 [ penwidth = 1 fontsize = 14 fontcolor = "grey28" label = "'='" ];
  state7 -> state8 [ penwidth = 5 fontsize = 28 fontcolor = "black" label = "r" ];
  state7 -> state1 [ penwidth = 1 fontsize = 14 fontcolor = "grey28" label = "'*'" ];
  state7 -> state2 [ penwidth = 1 fontsize = 14 fontcolor = "grey28" label = "'n'" ];
  state7 -> state3 [ penwidth = 5 fontsize = 28 fontcolor = "black" label = "l" ];
}
```

## Example: switch network

Used extension: dot

```[dot]
digraph G {
	fontname="Helvetica,Arial,sans-serif"
	node [fontname="Helvetica,Arial,sans-serif"]
	edge [fontname="Helvetica,Arial,sans-serif"]
	graph [center=1 rankdir=LR]
	edge [dir=none]
	node [width=0.3 height=0.3 label=""]
	{ node [shape=circle style=invis]
		1 2 3 4 5 6 7 8  10 20 30 40 50 60 70 80
	}
	{ node [shape=circle]
		a b c d e f g h  i j k l m n o p  q r s t u v w x
	}
	{ node [shape=diamond]
		A B C D E F G H  I J K L M N O P  Q R S T U V W X
	}
	1 -> a -> {A B} [color="#0000ff"]
	2 -> b -> {B A} [color="#ff0000"]
	3 -> c -> {C D} [color="#ffff00"]
	4 -> d -> {D C} [color="#00ff00"]
	5 -> e -> {E F} [color="#000000"]
	6 -> f -> {F E} [color="#00ffff"]
	7 -> g -> {G H} [color="#ffffff"]
	8 -> h -> {H G} [color="#ff00ff"]
	{ edge [color="#ff0000:#0000ff"]
		A -> i -> {I K}
		B -> j -> {J L}
	}
	{ edge [color="#00ff00:#ffff00"]
		C -> k -> {K I}
		D -> l -> {L J}
	}
	{ edge [color="#00ffff:#000000"]
		E -> m -> {M O}
		F -> n -> {N P}
	}
	{ edge [color="#ff00ff:#ffffff"]
		G -> o -> {O M}
		H -> p -> {P N}
	}
	{ edge [color="#00ff00:#ffff00:#ff0000:#0000ff"]
		I -> q -> {Q U}
		J -> r -> {R V}
		K -> s -> {S W}
		L -> t -> {T X}
	}
	{ edge [color="#ff00ff:#ffffff:#00ffff:#000000"]
		M -> u -> {U Q}
		N -> v -> {V R}
		O -> w -> {W S}
		P -> x -> {X T}
	}
	{ edge [color="#ff00ff:#ffffff:#00ffff:#000000:#00ff00:#ffff00:#ff0000:#0000ff"]
		Q -> 10
		R -> 20
		S -> 30
		T -> 40
		U -> 50
		V -> 60
		W -> 70
		X -> 80
	}
}
```
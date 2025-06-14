---
title: "Transformer architectures: variations and derivatives"
date-published: null
date-drafted: 2025-06-12
date-modified: 2025-06-12
author:
  - name: "Luke Yoo"
  - email: w.lukeyoo@gmail.com
  - website1: https://github.com/micttyoid
tags:
  - "Large language model"
  - "Natural language processing"
  - "Transformer"
---

# Transformer architectures: variations and derivatives

**NOTE**: THIS IS A MERE **DRAFT**

**Transformer what I refer to here**: self-attention with encoder/decoder (+ computations)

## Table of Contents
- [Bidirectional Encoder Representations from Transformers (BERT)](#bidirectional-encoder-representations-from-transformers-bert)
  - [DistilBERT](#distilbert)
  - [ALBERT](#albert)
  - [RoBERTa](#roberta)
  - [ELECTRA](#electra)
- [Decoder-only models](#decoder-only-models)
  - [Generative Pre-trained Transformer (GPT)](#generative-pre-trained-transformer-gpt)
  - [LLaMA](#llama)
- [Encoder-decoder models](#encoder-decoder-models)
  - [Text-To-Text Transfer Transformer (T5)](#text-to-text-transfer-transformer-t5)
  - [Byte-level T5 (ByT5)](#byte-level-t5-byt5)
  - [Bidirectional Auto-Regressive Transformer (BART)](#bidirectional-auto-regressive-transformer-bart)
- [Mixture of Expert (MoE) and its derivative](#mixture-of-expert-moe-and-its-derivative)
  - [Mixture of Expert (MoE)](#mixture-of-expert-moe)
  - [Switch Transformer](#switch-transformer)
- [Elements of architecture design](#elements-of-architecture-design)
- [Reference(s)](#references)

## Bidirectional Encoder Representations from Transformers (BERT)

high-order parameters / hyperparameters

|                     |                                          |
|---------------------|------------------------------------------|
| $d_{\text{model}}$  | The dimension of input embeddings        |
| $d_{\text{ff}}$     | The hidden size dimension                |
| $h$                 | The number of attention heads            |
| $N$                 | The number of stacked encoders           |

Variants/versions vary by: size of parameters and hyperparameters

Example materials
- Pretraining: Wikipedia

### DistilBERT

... distilation method

### ALBERT

1. Reduced embedding space
2. Sharing parameters across some/all layers

### RoBERTa

mainly about big corpus

### ELECTRA

BERT architecture + generator + discriminator

## Decoder-only models

### Generative Pre-trained Transformer (GPT)

GPT, often, interchangeably means decoder-only varations

Variants/versions vary by: size of parameters, hyperparameters, and context

Example materials
- Training: StackExchange, GitHub, Wikipedia, arXiv

### LLaMA 

- Position embedding: _RoPE_
- Normalization: _RMSNorm_
- Activation: _SwiGLU_ over _ReLU_

Variants/versions vary by: size of parameters, context, training tokens

## Encoder-decoder models

### Text-To-Text Transfer Transformer (T5)

Variants/versions vary by: size of parameters and hyperparameters

### Byte-level T5 (ByT5)

T5 with granularity of training tokens is at byte-level

### Bidirectional Auto-Regressive Transformer (BART)

Some text and position-related techniques

## Mixture of Expert (MoE) and its derivative

### Mixture of Expert (MoE)

1. notion of "experts in the field"
2. routers and channels

### Switch Transformer

MoE but huge

### Elements of architecture design

Common options for
- Tokenizer: WordPiece, BPE, Unigram
- Embedding: TODO  
- Normalization: TODO
- Activation: TODO
- TODO

TOOD: some mention of LLM

## Reference(s)

- A. Radford. el al. Improving Language Understanding by Generative Pre-Training. _OpenAI preprint [language_understanding_paper](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf)_, 2018.
- A. Vaswani et al. Attention Is All You Need. [_Advances in Neural Information Processing Systems_, 30](https://papers.nips.cc/paper/2017), 2017. or _[arXiv:1706.03762](https://doi.org/10.48550/arXiv.1706.03762)_, 2017.
- C. Raffel et al. Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer. _arXiv preprint [arXiv:1910.10683](https://doi.org/10.48550/arXiv.1910.10683)_, 2019.
- H. Touvron. LLaMA: Open and Efficient Foundation Language Models. _arXiv preprint [arXiv:2302.13971](https://doi.org/10.48550/arXiv.2302.13971)_, 2023.
- K. Clark et al. ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators. _arXiv preprint [arXiv:2003.10555](https://doi.org/10.48550/arXiv.2003.10555)_, 2020.
- L. Xue et al. ByT5: Towards a token-free future with pre-trained byte-to-byte models. _arXiv preprint [arXiv:2105.13626](https://doi.org/10.48550/arXiv.2105.13626)_, 2021.
- M. Lewis el al. BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension. _arXiv preprint [arXiv:1910.13461](https://doi.org/10.48550/arXiv.1910.13461)_, 2019.
- V. Sanh et al. DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter. _arXiv preprint [arXiv:1910.01108](https://doi.org/10.48550/arXiv.1910.01108)_, 2019.
- W. Fedus et al. Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity. _arXiv preprint [arXiv:2101.03961](https://doi.org/10.48550/arXiv.2101.03961)_, 2021.
- Y. Liu et al. RoBERTa: A Robustly Optimized BERT Pretraining Approach. _arXiv preprint [arXiv:1907.11692](  
https://doi.org/10.48550/arXiv.1907.11692
)_, 2019.
- Z. Lan et al. ALBERT: A Lite BERT for Self-supervised Learning of Language Representations. _arXiv preprint [arXiv:1909.11942](https://doi.org/10.48550/arXiv.1909.11942)_, 2019.

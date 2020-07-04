# -*- coding: utf-8 -*-

#第一步： 将xml的wiki数据转换为text格式  存为：wiki_simplified_chinese.txt
#日志模块
import logging
import os.path
import sys

from gensim.corpora import WikiCorpus    #gensim库

if __name__ == '__main__':
    progr = os.path.basename(sys.argv[0])
    logs = logging.getLogger(progr)

    logging.basicConfig(format='%(asctime)s: %(levelname)s: %(message)s')   #定义日志输出格式
    logging.root.setLevel(level=logging.INFO)
    logs.info("running %s" % ' '.join(sys.argv))

    if len(sys.argv) < 3:
        sys.exit(1)

    inp, outp = sys.argv[1:3]
    space = " "
    i = 0

    output = open(outp, 'w',encoding='utf-8')      #输出文件可写，编码格式utf-8
    wiki =WikiCorpus(inp, lemmatize=False, dictionary=[])  #gensim里的维基百科处理类WikiCorpus
    for text in wiki.get_texts():        #通过get_texts将维基里的每篇文章转换位1行text文本，并且去掉了标点符号等内容
        output.write(space.join(text) + "\n")
        i = i+1
        if (i % 10000 == 0):
            logs.info("Saved "+str(i)+" articles.")

    output.close()
    logs.info("Finished Saved "+str(i)+" articles.")


#第一步的第一次格式转化：从bz2到text  python Word2vec_transf_word.py zhwiki-latest-pages-articles.xml.bz2 wiki.zh.text
#第一步的第二次：从繁体转化为简体     opencc -i wiki_simplified_chinese.text -o wiki_sim_ch.txt -c t2s.json
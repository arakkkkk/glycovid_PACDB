import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
import traceback
import re
import os
import copy
import sys
import datetime
#ヘッドレスモードに必要なモジュール
import chromedriver_binary

def arrange_label(label):
    label = label.split(' (')[0]
    return label

def run_scrape(path, data_type, label_list):
    data_list = []
    scrape_url = 'https://sugarbind.expasy.org/'
    for label in label_list:
        options = webdriver.ChromeOptions()
        # デフォルトダウンロードフォルダを変更する
        options.add_experimental_option(
            "prefs", {"download.default_directory": path + 'data'})
        # 自動テストソフトウェアによって制御されていますというメッセージを非表示にする
        options.add_experimental_option("excludeSwitches", ["enable-automation"])
        # 拡張機能の自動更新をさせない（アプリ側の自動アップデートとドライバーの互換性によるエラーを回避）
        options.add_experimental_option('useAutomationExtension', False)
        # ヘッドレスモードの設定
        options.add_argument('--headless')
        driver = webdriver.Chrome("./chromedriver", chrome_options=options)

        try:
            driver.implicitly_wait(5)
            driver.get(scrape_url + data_type + "?f=" + arrange_label(label))
            time.sleep(2)
            # JavaScrptここから
            try:
                search_result = driver.find_element_by_xpath('//*[@id="layouts"]/div[3]/table/tbody/tr/td[1]/a')
                search_result.click()
            except:
                search_result = driver.find_element_by_xpath('//*[@id="layouts"]/div[3]/table/tbody/tr[1]/td[1]/ul/li[1]/a')
                search_result.click()
            current_url = driver.current_url
            data_id = current_url.split(data_type)[1].replace('/','')
            page_title = driver.find_element_by_xpath('//*[@id="layouts"]/div[1]/h1')
            sugarbind_label = page_title.text

            # JavaScriptここまで
            data_list.append({'label': label,'sugarbind_label': sugarbind_label,'id': data_id})
            print('add ', data_id, 'from ', label)
            time.sleep(1)
        except:
            # traceback.print_exc()
            data_list.append({'label': label,'sugarbind_label': '','id': ''})
            print('filed  getting  data : ', label)
        finally:
            driver.quit()

    return data_list



# if __name__ == "__main__":
#     path = '/Users/Kouiti/local_file/glycovid/pacdb/scrape_pacdb/'
#     run_scrape(path, url_list)

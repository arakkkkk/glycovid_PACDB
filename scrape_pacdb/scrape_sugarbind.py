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


def run_scrape(path, url_list):
    glycan_list = []
    scrape_url = 'https://sugarbind.expasy.org/'
    for url in url_list:
        options = webdriver.ChromeOptions()
        # デフォルトダウンロードフォルダを変更する
        options.add_experimental_option(
            "prefs", {"download.default_directory": path + 'data'})
        # 自動テストソフトウェアによって制御されていますというメッセージを非表示にする
        options.add_experimental_option("excludeSwitches", ["enable-automation"])
        # 拡張機能の自動更新をさせない（アプリ側の自動アップデートとドライバーの互換性によるエラーを回避）
        options.add_experimental_option('useAutomationExtension', False)
        driver = webdriver.Chrome("./chromedriver", chrome_options=options)

        try:
            driver.implicitly_wait(10)
            driver.get(scrape_url + url)
            time.sleep(2)
            # JavaScrptここから
            glycan = driver.find_element_by_xpath('//*[@id="layouts"]/div[2]/div[2]/div[2]/p[5]/a')
            glycan_list.append(glycan.text)
            print('add ', glycan.text, 'from ', url)

            # JavaScriptここまで
            time.sleep(1)
        except:
            traceback.print_exc()
        finally:
            driver.quit()

    glycan_list = list(set(glycan_list))
    print(glycan_list)


# if __name__ == "__main__":
#     path = '/Users/Kouiti/local_file/glycovid/pacdb/scrape_pacdb/'
#     run_scrape(path, url_list)

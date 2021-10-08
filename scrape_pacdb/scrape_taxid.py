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


def run_scrape(d_today, path, species_list):
    taxid_dict = {}
    scrape_url = 'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi'
    for species_name in species_list:
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
            driver.implicitly_wait(5)
            driver.get(scrape_url)
            driver.implicitly_wait(5)
            # JavaScrptここから
            input_box = driver.find_element_by_xpath('//*[@id="searchtxt"]')
            input_box.send_keys(species_name)
            submit_button = driver.find_element_by_xpath('/html/body/form/table[3]/tbody/tr[1]/td/input[4]')
            submit_button.click()
            driver.implicitly_wait(5)
            species_tag = driver.find_element_by_xpath('/html/body/form/ul/li/a')
            species_tag.click()
            species_tag = driver.find_element_by_xpath('/html/body/form/table[4]/tbody/tr/td[1]')
            taxid = species_tag.text.split('ID:')[1].split('(')[0]
            print('added', species_name, '(', taxid, ')')
            taxid_dict[species_name] = taxid

            # JavaScriptここまで
            time.sleep(1)
        except:
            print("failed in ", species_name)
            # traceback.print_exc()
        finally:
            driver.quit()
    print(taxid_dict)



if __name__ == "__main__":
    d_today = str(datetime.date.today())
    path = '/Users/Kouiti/local_file/glycovid/pacdb/scrape_pacdb/'
    species_list = [
  "Clostridium difficile",
  "Norovirus",
  "Equine rhinitis A virus",
  "Leptospira interrogans",
  "Sporothrix schenckii",
  "Mycobacterium avium",
  "Entamoeba histolytica",
  "Reovirus",
  "Borrelia afzelii",
  "Adenovirus",
  "Paramyxovirus",
  "Rhinovirus",
  "Influenza virus",
  "Treponema pallidum",
  "Escherichia coli",
  "Theiler's murine encephalomyelitis virus",
  "Rubulavirus",
  "Poliovirus",
  "Vibrio cholerae",
  "Streptococcus gordonii",
  "Cryptococcus neoformans",
  "Clostridium botulinum",
  "Hepatitis virus",
  "Listeria innocua",
  "Burkholderia pseudomallei",
  "Enterococcus faecalis",
  "Clostridium tetani",
  "Trypanosoma cruzi",
  "Hantaan virus",
  "Lassa virus",
  "Mycoplasma gallisepticum",
  "Neisseria gonorrhoeae",
  "Pseudomonas aeruginosa",
  "Campylobacter upsaliensis",
  "Helicobacter pylori",
  "Streptococcus pyogenes",
  "Chlamydia trachomatis",
  "Rotavirus",
  "Haemophilus influenzae",
  "Plasmodium falciparum",
  "Streptococcus pneumoniae",
  "Shigella dysenteriae",
  "Histoplasma capsulatum",
  "Burkholderia cepacia",
  "Bordetella pertussis",
  "Herpes simplex virus",
  "Human immunodeficiency virus",
  "Paracoccidioides brasiliensis",
  "Lymphocytic choriomeningitis virus",
  "Coronavirus",
  "Actinomyces naeslundii",
]
    run_scrape(d_today, path, species_list)

import glob


def get_count(d_today):
    f = open('./data/pacdb_glycan.csv', 'r')
    pacdb_glycan = f.read()
    f.close()
    f = open('./data/pacdb_taxid.csv', 'r')
    pacdb_taxid = f.read()
    f.close()
    f = open('./data/sugarbind_glycan.csv', 'r')
    sugarbind_glycan = f.read()
    f.close()
    f = open('./data/sugarbind_taxid.csv', 'r')
    sugarbind_taxid = f.read()
    f.close()
    f = open('./data/pubchem_taxid.csv', 'r')
    pubchem_taxid = f.read()
    f.close()

    print('\n-----------------')
    pacdb_glycan = pacdb_glycan.split('\n')
    print('pacdb_glycan => ', len(pacdb_glycan))
    pacdb_taxid = pacdb_taxid.split('\n')
    print('pacdb_taxid => ', len(pacdb_taxid))
    sugarbind_glycan = sugarbind_glycan.split('\n')
    print('sugarbind_glycan => ', len(sugarbind_glycan))
    sugarbind_taxid = sugarbind_taxid.split('\n')
    print('sugarbind_taxid => ', len(sugarbind_taxid))
    pubchem_taxid = pubchem_taxid.split('\n')
    print('pubchem_taxid => ', len(pubchem_taxid))
    print('\n-----------------')

    # taxid
    glycan_pacdb_sugarbind = []
    for i in range(len(pacdb_glycan)):
        if pacdb_glycan[i] in sugarbind_glycan:
            glycan_pacdb_sugarbind.append(pacdb_glycan[i])
    print('glycan_pacdb_sugarbind => ', len(glycan_pacdb_sugarbind))

    # glycan
    taxid_pacdb_sugarbind_pabchem = []
    for i in range(len(pacdb_taxid)):
        if pacdb_taxid[i] in sugarbind_taxid and pacdb_taxid[i] in pubchem_taxid:
            taxid_pacdb_sugarbind_pabchem.append(pacdb_taxid[i])
    print('taxid_pacdb_sugarbind_pabchem => ', len(taxid_pacdb_sugarbind_pabchem))

    taxid_pacdb_sugarbind = []
    for i in range(len(pacdb_taxid)):
        if pacdb_taxid[i] in sugarbind_taxid:
            taxid_pacdb_sugarbind.append(pacdb_taxid[i])
    print('taxid_pacdb_sugarbind => ', len(taxid_pacdb_sugarbind))

    taxid_pacdb_pabchem = []
    for i in range(len(pacdb_taxid)):
        if pacdb_taxid[i] in pubchem_taxid:
            taxid_pacdb_pabchem.append(pacdb_taxid[i])
    print('taxid_pacdb_pabchem => ', len(taxid_pacdb_pabchem))
        
        

if __name__ == '__main__':
    d_today = '2021-07-28'
    get_count(d_today)
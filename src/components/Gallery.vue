<template>
<div class="cont">
  <div id="gallery">
    <div class="rows animated fadeIn">
      <div class="bio-text">
        <img class="page-logo" src="@/assets/gallery_logo.png">
        <!-- <div class="bg-img" style="background-image: url('@/assets/abt_left.png')"></div> -->
        <div class="bg-img l-illustration" :style="{ backgroundImage: `url(${backgroundUrl1})` }"></div>

        <div class="gallery-text">

          <div class="pa-gallery-player-widget" style="width:100%; height:480px; display:none;" data-link="https://photos.app.goo.gl/CwyCsqhQR5qgvKd88" data-title="Earthly Sculptures " data-description="10 new photos added to shared album">
            <object data="https://lh3.googleusercontent.com/jMuQ6DHnHWBMHW2Ea6ULpCAboKLQnvlUIq1XCwMHv-ZKu7pzCiIoycnNK8ZhzuTac6BPWGCC3Q4th1jl_BEsD7vd8Xxqs1_MCzadaY1HFInzpNxXt9jxYYI0aP6-tUtZY2dgeZD_9g=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/E72RtYv98NDCedR_Mi5-3u4jqu35CaOsbDACY8ZYOk0EI7Udg5Noa030zufFEvyodX-IlXZi6eHmwzrRoAXkvvTR8F2iZgCmDwz_H-w8o2BqhmLhKldeBtSg5-5weJmrTj3AK048cw=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/yIrm_A-gYTVKVWYrgn7GHrF-pMRFFDvYvkBBPDdjrNFvPoRZ7mCZCW1c0KNuGvcxQ-T47C-YrdvWRAW7jL3YxLrhk3WJYvHcPh43PPT2p46WBH9IuQcASHMByP1X40JOyx6fuSVMiQ=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/Gl2xgLsG8oTHNybtK_dVuubj1DBedDP8gU_kO-OKeCIPAtJZ4Ja0uHqeWo6IRzTyOTGIsiuR0nh0f1GHb_Dl2TJ_kNUdQPjHLWt1K7OYwLll5YS7SWSHovt6Po8zDGdRjUqfOPFCVg=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/fpBOj1AuXd0jZxRAdbQPGaE0MYg8xaBTI8mQBTr7v0wbJxmiikgJiklCRV2G5WLkPqvTCxL6IN6SX2V0J61ngoCBbpYM-h42rxX-ZLIohlMW7RqZfhEggay13GFzHvMHhBZ77YXBMA=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/Me0IWFQKDLaBysenBNy3L1MSvlamP_IqxuJj6hoG7xL0UUlixDjJGI4HlyqDGJLlvuS4uj0VMBvjI4pucxr61GJmuDRXnWTlvk6dN-Fi0XErP8bk0uuJivhbvSluSRdjjjsPC2WQoQ=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/jiunz4553HPP_fGCe3NG6geDbas9OxH3ZsdvhpSEjnDHD4pj_D3d_e2cE6Z_T52VWIFsZHmNDuTy3M2u7gJc2ti0JruKPti-4MyKWHn4ty_hijWpvYBIFK_ek4tpr8_3o0aeiLM5MA=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/VouFNZ3bY9a1dlrypjsep-4jbqCJv-bkqyy5zCmBqwhLYtkAiiSKDOZkD9vTyH7semkoEuj5Rlz1PHAd7MVWBAm6ZI7DgVqNM0lAPAU1H645s_vZXu39-511LxWeGPHTiUm__SNuKQ=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/g8lKc4YAHGavf5B2nmFv9sK0nJ_g-EYdYHH6C6rhfUxIPjBGPHliN9zsJvcyiwvmmRvubwENbJHsSJkuXR5E2nZpVVS76PXYqSOj7LioA2FJIGodMQF5JBiSzulPX9v6jtIpbXZM5w=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/GtbILdJl51OxejDL2Dyb2HfPqq_EMdl2IpyDAitF87Kanhj3XhWOmwNZLgz9b2QnNpbdmM-2ZMqtkQy1PQXdfV5LEx57GSusv0LbUkMU3ETdyWc_wqIPRW3-jVr-iEC7osnuGsS9-w=w1920-h1080"></object>
          </div>



          <div class="pa-gallery-player-widget" style="width:100%; height:480px; display:none;" data-link="https://photos.app.goo.gl/Lmf9sefpyERATyuj6" data-title="Cues from Colours " data-description="20 new photos added to shared album">
            <object data="https://lh3.googleusercontent.com/XsIAPAVF8V2UKfil9zzgtnqKLI7ONTb3WJFgL7cxxcgnTv-CjZmoexW_xP6HoOx6z_2uQ7SlVbythm8G_txa2lpg_SYpRAxJYMr-2KBkqDDcR0NtvRpIfos00pF3pW1ukA03vdO4aQ=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/2aLfPsnfs35XKXwW9DP72Yrk3S_GCMl-iXB1YAKNvtCF8ASf4LHXtCkKOzfojUiEKuG24pVgAbpHM1HDAD_w9Rx9Q7kJ_GUu69jcvb0chq0DhNq8bQZvxTbX-q_oZAFt58gXy7VJaA=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/NvI2J_UMifpXKLSof-UD5l1co2VeLbKSgCp0C0ZdGCJXmPv9nvnJPpWkIzpwtmfZ3kTVGAZPRNNNIfOv8PENZQnWdmRO2YSBpR8fLd1pUt2v73GCcnibW10CYGE57hEML5AnNBdq2g=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/J0XWQzlOM8WicCs5W0RcypzcwhsLiPH1jukzhNl7xajA31I_7yMHk6sZNrr7ZTNANinWyp-u3XXW9x0AKMUYFAh5m_J64B5FBlsakjGWXL7yvrGfyFhtFPF0tS4LLXsyY-GPfhhgkg=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/H03maEq2gKTy-cBABkDUgy7zg3ij3pmrqwGELpkWKzDTNroQgjsyyfpmesQzpsGVAllwB1R5KWxZaQd4_5n2pWh2WRwJ7hyEzz1Sd7GFSNTkdyxFXcEP4u941bm6MI_94OhRXi2Pbw=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/IP3x8r9Tfm-flDCsyaVNks8cp8MJ4dmdoOD6rf_VNViex3R3q9eGVaQiGZq2rRDxfRqhDXpB-gmcHSKVU8doJ_mBVKP1JmYCoikRwv74o-kGxazIdejGxALvZQx1MSFcIqFmQA0tRA=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/BRhNxrzF6EWH7r3drzRinwUqrp_LQztxIeYC-O1b58_4o0Rz398EoWcnaSjGfTwnBUBu4s-WmxmKpzBHVyzv8P14XBSPbi0Zf5ZVdaghxy_Th1oRnZrmZC0JyjZ53Tc-bE9OP5oaZQ=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/pln0sUCdxCNyzshgFGy08aMlpYj9ewqNaghg0lqg-tz9iTnM-p1BhQGnEtkJOsW4Xe-e4w4z8eKsfrea5di1dgKXgHK-hNU0RL5-gxnq70QN8aGfVt8lKCOIp4Aa0UXE4vCXR8mdCg=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/Dc_IDU8BBdLrwJqApUuWQqrlE6Nv7qmX0gCyV8r0wncQxa-tzv39PbAbMOMLJwjXKaTu3SWkmOk08UzdBKltchuN7X2xqjcesLFRjmhDtUt7lXUGnk6s0pluNnm8KBcO9PY1d7ENpA=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/JMZ5SHc_HOxAbfvSTMhDK1BlI5ehOMkUUJCNLHhE9RqUlLULMvvsPHNe-TvsHkVzB4aE18ktBRcbZpdlDJzMERwrz8pGu6xc9bn8NDJ52tiYXWh2jc57aWYtzEXM83Cdvfo6NDlKkg=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/4VaNs02sbhdHOny_EjN27xbnWLWizobJ_Nuw8sI2PqduE3whDQEwcMsuNxgbtmUGDq-YAvWYfhk6P7NOtpipUgEULtnbc1AZyPWb-oryXNIVyKorfIZJsvTROzanc5ZgU0FhytLphg=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/lc154dTUnBzuZBYMHOnriGjefRo8sIvofBlCCIUUoXHs3DY5Ezy2zJDscmh3DwpzhWCcbZe76orNe7tUCh-0UF3ydV-H7vQnhWRCwykjRw4a14EggRgp1Q20qw2VIhWeSvUzuFIbDA=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/3GmlDdNY0itl2Dkgk50I6hURTP-JUwKTGn2fx0EuyhC5c8edrgH643bNbjbEh3kq8TJpSBSFcjf0TID7voifCTsyHULhm7pSEi-dR-QwpfAyl2jlwU9ZgmKmFqSY4ZP1IwxBAcJXkw=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/0jdCVO3N7VhN4NrL8UqpvDJGgbp-6adVbDg6OURVGqoNjkef7rsWLtj5Uvs2HGOScHwdh7AEB3ONpjhbqG9X9ZImCOAWSOnlZ5Cb-Lml4b_7f1-AotrohjDF_fSttJEzMcbfaZmo6Q=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/_nQDiqiMRh7lMgvWYVBiABiPd0am-eQ1oC7m54YuBWLBqlAnNv2MHmC-JajhCdpXgxA7YQv6uNhqIMppp__j4V3sRzxXOJunTv-s8yaMCdRr1-XKgG8E941Y1XY1MD7RRFLBc6H4cg=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/yfS1b1C_WGOUU9RYv1aLGs3_4rwRlNM855aid5n55TIObHJGXT1AYWMcPAU6uVxXwT-PeNcyJcPO3kwUdUOjlrLJUx1pIqHSBIEuw2xMWxaw5yggKccMCN9e-_MVuPIMwJsnJ68NwQ=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/gV9JxM5hRQudJ8C3voTvaeNn90s5r3rP4SLKTZzZLD9hTndEr3fpmv_lBf1QF61rMOeqv4xs58yPuakw3guhGVXCoiX4KotbDsTdQSrW8IGlHXFWr2vpgsMwhG3NTea_JQXBmEXO6Q=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/WhSSQ_MH_C2KeuXnYpOn1A2L8HhVTgsXSCdGhzOV0xlCGCvwZK5IbCkkNrIgoUluqlwPT-20_m0PFmCVv6gIDCO0s_Kxp3EZ_31SEFwfnIxcn8awIBT34KaAxYL11cjsyiVrCC6wXA=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/Nmo9DfPZa8XoI0l18ULouxaoKOVpv7CBbROnDESXKT3zn_8AQPz5UPI7InUM8qd5gm3akWTKhVzdSNIxy2bymNZvYQFoNaBxOvfJgc6i_kMUClqxNFGDQ4bRvmnTtuSSOML36HrjEw=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/yjQCz5YN281gV-0eNkXR4rYwHuyTRwWP9kiq9-gGXLKFdFzlClRntDBUZmIgAgwRlA5qLygbS77o4PNd3Ej4wrRi8p_2Gj76OWgOXr1jkOFJbF9QWta7P_DvsyXrSDfznkmM5a_s0g=w1920-h1080"></object>
          </div>



          <div class="pa-gallery-player-widget" style="width:100%; height:480px; display:none;" data-link="https://photos.app.goo.gl/G3DGAiewM9hdRXZw6" data-title="For Forever " data-description="3 new photos added to shared album">
            <object data="https://lh3.googleusercontent.com/MhLtj7NlFyZOJ7xroYymuMc1mNx5y1cXsGpAh6Ga5uG3Lz-Rz9TmxCsmKaLUH557-mGwSU_D7JYpvigoPDGsgBFFnu7PJfCN0z-eKgH1EcWa-FZs49tPqa_YaqhtfI2ErPW5_JYGAg=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/CXXHuBm7aBNia8F33YibVcPJBeSQ3KVdhqm_eBZmhBQBRQUnTCrJ-2_oO8BIkWKsJqqqA6vR8P6cTUUwHtXXbCvnsGg5zfLiedCUhmh-wK4XqZHfCaagtNY9SqeZrg_S4ffs7aRBjg=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/o-m5mWWD1wx5ViHSCDRjFg4100tMehetK9DxnSE1MBs88ihu0TrtUWGx_Zn5BCo11YqYzgOoXlOJzhZsbFSVHpYl7GwCmI-OqoTmBiN-Lju0laoIlLVGtQMrJjr4ewsWMKrQ5p7t0g=w1920-h1080"></object>
          </div>



          <div class="pa-gallery-player-widget" style="width:100%; height:480px; display:none;" data-link="https://photos.app.goo.gl/3xT8eerDmAbbNp4P6" data-title="Le Dejuner sur l&#39;herbe " data-description="10 new photos added to shared album">
            <object data="https://lh3.googleusercontent.com/OSATG8Bg34kuCTD7H_-Y9njFRRp5ZWeBR5e-aVBflKTRnHyrdGsBkXz9BVEsw3CnyGj0DuPk7VHE3W_8JyISk8nnqriyr2tzTJjwn0e_FJPtZS2sq3lHaPShUQYUUdctMUkVQCzx1g=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/ZBJJcu40_qNO_JE7Tl4vRva4rmATS3jS84uKsEtFS4j2_NNdHyrXCw6AdrDdm-aS3VcFmS55_gvtKypQOeWV6o4cPCkOHD0UwHBH1LQvl9n-dL3O7yaa2pIK7d72_4rG4-xNdHGVIw=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/cTTy0gSOpdLwOayGkW3kzk8vTMeHSAAvdUHggkykLHJewXZd-M5Xg7EF53UQb50FLlbQ7a8RRfMXsCeyl0_4zlYNXDg1lcIpvsgjTWAXRMFbIgk_zPNdulTSyiIcmAbLcAE3zKYTzw=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/_FI6GUAgeY2Cv5R5imYxxHWl7ksBURsvO4InAC6QpSIGk3r50OTSNV0OxQ9rhayMBSSPhfzLfqr1GCui4uz_nfoJ-OyADMVqTIt_NijZnUnpnZrArg361XxVug1EcArj7rc3l0uUZQ=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/RMxEqwMd4dXSuog7mIzh13kMRTbpj1F1fLVqpsGEwNYEo7eJK3KjoCyuQ2eFnpFvBLpDZ9_ksDzw0qRS0d8jiYcES6UpCVDn0S3aXhh17v42CShBqZxKGjnqALu8YC9olbqHfrOQVg=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/gOlbpmgH6MdvomlEXJqKzoUU6SyGUEWMfxI802QXBMzziUSacUx04lV2bPVNovPMZR5wGNIzF5fICOoRjEwwasybmWEbUuXp7wlSYvxAuYEB1CaANEgdADIBdWKV8TSxue49hC0gsA=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/giCUTX1fp5qnu_o8tqHfPHz1tikcDD4geOy0KdyfUl5P8giY2NstbdgTa6_xzyDXy7OSxfGvQgf1x8saEfw2qo1MJrG9o13Mh184fGBvaQXIaOi_RSy-jhTM6f2I4llLUMzlM_h4hQ=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/l_nxlM7olZQIS82pe1Vfk9E64mXs34UKbAGnXsvrFSg5rZgIqrPxrAR8vluS-EI1FzpJSdl_QF3axvZRX1CLIwRUG6q9P6dXQdF3ECwdxAW6QUQrerD51ME-kUjuYIM__m3rJVt3eQ=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/dHFr0w3jdQUWiuM6OnDOfS-1NPn2D45mf5p6iiF9gEyzJBWSzHVnEpTZK7xrKtceRk9b9WmtbpfARFOQNziWmhVd43BAq9PTgltCqa-gkvyLwY67cgwKXK-15TRVxYWPuLqTwWnHAg=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/j-T7GtXcbbR7gO6rNY82f5wf9MXEwIE38nUqhVa4vOGsDiTbiwlNslLtvdddcyqK60r95ELO8AcKCdFM5MGv02bB918O7WWlqkMY0OCKGksAVVEes8F__NG7_xsbFc6LPmVrTgaUxw=w1920-h1080"></object>
          </div>



          <div class="pa-gallery-player-widget" style="width:100%; height:480px; display:none;" data-link="https://photos.app.goo.gl/soKQvAr5W1BrSP3L7" data-title="It Was Always You" data-description="7 new photos added to shared album">
            <object data="https://lh3.googleusercontent.com/RSz_fYpqRqDqlBOFYvrBnaalIsAO-LMhFZhqMGZdJnw3PRNV5ITHem7f4w_UueUJ1bQN7RUdJS6XZYGkmmbjHbUy6G4NAT168M--TaYRYgjsmsg4CXE_ujhY7M22WoGZOn4DcjF1Xw=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/tDFY5Jpz1rNhLU4WWL_ubEQ6N5h-KzUt0dRo6WlSMdG95yYAhC_mWcIIn29_uGMzNkA7XusxsjTO6pf9_YFrJsfjGgFAJEumCE4-2a2t8tZrMJ7_j-riJnpHEd_oL4L-ty_Ap0Xuvw=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/HoaRlKFILbfPhrEqjbcvJ7BOOwNft3h5kKaX6T43yDl2GJa3IpgxO3gUx1INZncWC01-JK89iaiImuAggF2DBwC68nxhotU8dJ3HFzDl8_7h2Kp-G8Bx2xaaanJkzCIc7i3dIj9_4w=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/aaIBbVBC_4pKG1ercErU42Z-lVFGgnUzDcdLMbkarbZYlryqbe_1weePiAiIGoJ1BEglpi-p-I6oSHhBQXRkIuZRcUhR2_at7ePCfaRVFzlNOvUsjsE5a5VkEDG4_S_muj19uR_vdw=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/7JeIJeNUX91WhCyMuWz5vNvLfQvADkjk2j4pMsm93Cup6HOMByG0nQh41uTaGjKIAm0Hd_nG1DQlZYtnmV36sQqbapV2vc1Fp2a79JwtwlVUzIOm1sIuh-pFyMkNHG6dvOFuQbdluw=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/Y6M6S02X2O5_AEBqyFMa-dO-m7HYTwW0UikUEuVJImn82FI-D3DgQX_iqNA_jy8d13uGrFBD-PitH8xI4Q1AEni8fOqYT2mjBgZBBOwby6bVrLmCF3LmkKOy8uKBKcWqIeIa9BXryw=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/n9vDxwRaAU8hwEA8M1IF92ZJNL9NTBN4wmcEPrXJcIlNOMH-rVWhGKuCUH8SVuP4klfRVVcBYH_Z65dVqWmL2TP2FdM-zD-XKMj00mSiFktH-oOzpcqe0ElxL7Kjwo23nLH2xtlNNA=w1920-h1080"></object>
          </div>



          <div class="pa-gallery-player-widget" style="width:100%; height:480px; display:none;" data-link="https://photos.app.goo.gl/youqcrZwxJXHe9kB6" data-title="Laundry Day" data-description="6 new photos added to shared album">
            <object data="https://lh3.googleusercontent.com/T6AAMsFKNK-qFR3hjbzi0bvDlpk6PpMwf8p-VsNSS0RbXsykCJx8KOylmStjmNbbkww6oTuDSsRmyYPLyJF85Gxav5mF4Mire4IMFlqSbdnlmM0Epl76athSA6cpbnsEqRyHGbojZw=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/sp-MG9nNTh5SSojY37WbMZoqRgitce982DAUbXGlAO3n2TIaWsfxRq22joX4N7Ku8_kb0wzni0RAMMcEsh96Jg2P4G5ndCtO-WC7tRxTE-5yFMRbggQcE-dy9lywHP0BQuBysPvVRg=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/tj1mn529UAH70-JS7qsAKWG0G-vILspX3yjrxfulz1yIyz9OXKDWtzJpdx0hiy8V5ww_CVTO21Ub9454QFjgiWLTNviT9gcY5G2UJusueSGlm_lizisp8I5okaONtZNcoJL1Tabiow=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/qjd__LEO9f_PIU190O4loJswLt3rFqodRNf3EmkNQGsQhUprzn9du5OQ5N2b9-u7Hc0eTEKq0r9Jz4kYgKNMeavDXS_bIp-0TJMxSrrB-n0nKGesA3upqObtz74EqMX_9IJ27qeqdA=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/zAmY7NABTAoeb74j84LGmLbArwBoaBFWg1P7c2GfLGqTFa70GECi5HnsHkTC2gI90uXsVbN_zp_7qm61kVmfdUoRNYRFpTxn_RZsvQ-LJZt_nG_NwVUXn6SBennyyBOH6oHwd_RmuQ=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/b7SgwfmcyJoWol2RG3c61KqZt2TxuLk1SoYRhv0GIHcdqb7DepDKgsh4Ow4E8AiH1FaM-p7wScOzQZdvpMOOPMzTpiOycx83zlogvDWCX8Sbvj9IdxZHtgeN58l3A_cxatmKuLD0tA=w1920-h1080"></object>
          </div>



          <div class="pa-gallery-player-widget" style="width:100%; height:480px; display:none;" data-link="https://photos.app.goo.gl/1ii4L4cdKTV3kqmR6" data-title="Not Like The Others " data-description="12 new photos added to shared album">
            <object data="https://lh3.googleusercontent.com/C6aPNzy02WThgUk2ehrVR7GbXlK9UDLa3r58-aJ_tPqXqbLWFsv3HKR_B1QzqeyZAqgJgHuqX_xURJ8DqcQkyuIkBE1hHPyJ9H8b_MM6oS4ABBdT3TR6FLyqGylaJdBqU1sa8qK1uQ=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/P216L5mRR6Y1wnislr6ufXsQGEe6HN4OflkGKQdmEfzn8vNyr4KVx9D1H62c0YjCSdObnAu5zeIOE9PWA_GAY0E9E6IM-8cjX4UItsGt2o5SLq_tmCQov-86mavmb6Qs_5X-IpCwfA=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/hD2-rlbBP_zmot9zy3s8yoXO5zO00hUNPRPvHZBNPq4gmGrKj0_n7OIplUi5cRJbUbRvUdF-IxGXRWLBTyNzxR2FLZ8-BDmFLHUtEusYya3gOjbQ5_Hpf4qdyuF-dMmJ6MgHP8tVNA=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/A_goRhfCk00EsS9887w5FLZYFCCZkTAqG0OH6j8a54uG4BjA_plkil_35zKpb-N2KOJA58So_6ZWbrwylerRQ00Q78ECRh9R6rDAoMWpyuYGtcBgDbfAA9ukmqXETrDJ4Yda939DZQ=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/7F4dqv_udKwMnWku3KomsBZQzS5_Q0Hs8e2dytpkaNckrk3690Pa2lPSXJtogiZ3LwpwsAIlet6GfEq6XI4kdtP5js_03rTRzu_eTgGpV8lYJj9SYGF0RJT3EdcSumSpjtWVXv425A=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/fxNjFC2WZPpB75_EtaD60cf6B3mQT1_ZukCTH50q7Z1AbQ92KYLZ2yysWUbYhMDbEnZZd9REM5sH7LQ9r9AqsS_5BHZZjvu1jeeA69pxZ8dakLstEydCkj0oOic5Z_w3_FiPRvn15A=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/cFSrLdkLEZ9rXGVSBB8SY91YznVXQ_VUxK9aaTlgoP-XeCYD6cpycNAtxOdHPsn9_ZcAJzAvz-CkOjp2EBQ84QJ8kT9QtmA6F6BhIdTlAqZYyHpqVulMeD9UjsTqXquE2zA93pgMXA=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/G6dncoNUOqhof24qzTEz3GRktX_ZpAtzYKLwvKqTDfgaK6ZTPZyYz6BCImRvBtOdtbcMxsx3JBVur8izYHek2vkgsrdCyWI41rtl82G30fXFm7aoFkWedEoGRj9jlZfSS3b8yO13jg=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/p24Yfjh3bBUXwk201ko6GFtXumy7XTlJrz8qFYXq3yyQJaUyjxOpQl0JbOzrQXJZ4-0jFTSDRVISFXE6dW-4486rudANQTuOgt-XKGY5b4neroIp3Paf_3Rv70wQKhZjujrZHHKaVA=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/iAEhKhbq1PJtnuc-NYmIMIOs9OPiWu2M1TdbEkExkfoT6IzaGjpGqeDjRYWGGP0kb_gRvnshzqmuf02PDZDeVCW0GAQD_VHt73oow40-j7A-iYORgVt_6WeURdw-N9Sefnn59cuWbQ=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/ubAyIlj93217CKYiEeVt4-1S-7Rw4kqQh_5_tED6NGvDDRNTDo-lOxGPR0RC9CDEo7jNKSkDR43NM5GuSMzE6_mU1JEwTXdavzCooWA3w3o76wrBagQcBkr3TwaxLpitsywx7T2rlg=w1920-h1080"></object>
            <object data="https://lh3.googleusercontent.com/NnUQPn63cAoEj656banpyvEqAHVGQmwNG80IkLmKQX0aJmFzE0QQdd_j7TRU-4hbNK80YEku1BfK2UkxL8UJrMn4NX0GsFhf1s3IfdT82Qs0Jxdo-_22sDqbFbiEEJv6FNiFDIivGw=w1920-h1080"></object>
          </div>



        </div>

        <div class="bg-img r-illustration" :style="{ backgroundImage: `url(${backgroundUrl2})` }"></div>


      </div>

      <!-- <div class="bg-img bio-img margin-top-offset-15"></div> -->
    </div>

  </div>
  <div id="contact">

    <div class="rows">
      <div class="contact-img">
        <img src="../assets/abt_contact.png" alt="Contact Beth">
      </div>
      <div class="contact-text">
        <p>Bethany Rose Puttkemery (she/her)<br>
          <a href="mailto:hello@smellslikeflowers.com">hello@smellslikeflowers.com</a><br>
          <a href="#">@bethanyroserose</a>
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import Header from '@/components/Header.vue'
import backgroundUrl1 from '@/assets/gallery_left.png'
import backgroundUrl2 from '@/assets/gallery_right.png'

// import HelloWorld from './components/HelloWorld.vue'
// import VueInstagram from 'vue-instagram'

export default {
  name: 'gallery',
  components: {
    // Header,
    // HelloWorld,
    // VueInstagram
  },
  data() {
    return {
      info: null,
      backgroundUrl1,
      backgroundUrl2,

    }
  },
  mounted() {


    let googlePhotoScript = document.createElement('script')
    googlePhotoScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js')
    document.head.appendChild(googlePhotoScript)
  }
}
</script>

<style lang="scss">
#gallery .page-logo {
    position: static;
    max-width: 100%;
}

#gallery {
    .bio-img {
        background-image: url("../assets/abt_bg.png");
    }
    .bio-text {
        width: 100%;
        margin: 0 auto;
        height: auto;
        p {
            color: #ed2d2d;
            font-weight: bold;
            font-size: 1.5em;
        }
    }

    .gallery-text {
        position: static;
    }

    .bg-img.l-illustration {
        width: 100%;
        height: 20vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .bg-img.r-illustration {
        width: 100%;
        height: 20vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .pa-gallery-player-widget {
        margin-bottom: 1.1em;
    }

}

#contact {
    .contact-img {
        img {
            max-width: 200px;
        }
    }
    .contact-text {
        p {
            color: #ed2d2d;
            font-weight: bold;
            font-size: 1.5em;
        }
    }
}

@media screen and (min-width: 1024px) {

    #gallery .page-logo {
        max-width: 370px;
    }

    #gallery {
        .rows {

            .bio-text {
                // height: 75vh;
            }

            .bio-img {
                background-image: url("../assets/abt_bg.png");
                background-size: contain;
                background-repeat: no-repeat;
                height: 100vh;
                width: 80%;
            }

            .abt-text {
                position: absolute;
                z-index: 1000;
                max-width: 1024px;
            }

            .bg-img.l-illustration {
                width: 350px;
                height: 40vh;
                float: left;
                position: absolute;
                left: 0;
                top: 40%;
            }

            .bg-img.r-illustration {
                width: 350px;
                height: 40vh;
                float: right;
                position: absolute;
                right: 0;
                top: 40%;
            }

        }
    }

}
</style>

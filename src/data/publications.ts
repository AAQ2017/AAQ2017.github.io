export interface Publication {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi?: string;
  status: 'published' | 'in-progress' | 'conference' | 'abstract';
  url?: string;
  volume?: string;
  pages?: string;
}

export const publications: Publication[] = [
  // Published Papers
  {
    id: 1,
    title:
      'Deep-Learning-Based Segmentation of Extraocular Muscles from Magnetic Resonance Images',
    authors:
      'Qureshi, A., Lim, S., Suh, S. Y., Mutawak, B., Chitnis, P. V., Demer, J. L., and Wei, Q.',
    journal: 'Bioengineering',
    year: '2023',
    volume: '10',
    pages: '699',
    doi: '10.3390/bioengineering10060699',
    status: 'published',
  },
  {
    id: 2,
    title:
      'Automated Segmentation of Levator Ani Muscle from 3D Endovaginal Ultrasound Images',
    authors:
      'Rabbat, N., Qureshi, A., Hsu, K.-T., Asif, Z., Chitnis, P., Shobeiri, A., and Wei, Q.',
    journal: 'Bioengineering',
    year: '2023',
    volume: '10',
    pages: '0894',
    doi: '10.3390/bioengineering10080894',
    status: 'published',
  },
  {
    id: 3,
    title:
      'Sepsis: A Systematic Review of Antibiotic Resistance and Antimicrobial Therapies',
    authors:
      'Macias, J., Kahiv, O., Pattik Edward, R., Khan, S., Qureshi, A., Shaik, A., Shalla, A., and Shah, D.',
    journal: 'Modern Research in Inflammation',
    year: '2022',
    volume: '11',
    pages: '9-23',
    doi: '10.4236/mri.2022.112002',
    status: 'published',
  },
  {
    id: 4,
    title:
      'Utilization of Artificial Intelligence for Diagnosis and Management of Urinary Incontinence in Women Residing in Areas with Low Resources: An Overview',
    authors:
      'Qureshi, A., Mathur, A., Alshiek, J., Shobeiri, S. A., and Wei, Q.',
    journal: 'Open Journal of Obstetrics and Gynecology',
    year: '2021',
    volume: '11',
    pages: '403',
    doi: '10.4236/ojog.2021.114040',
    status: 'published',
  },

  // Papers in Progress
  {
    id: 5,
    title:
      'Assessment of Pelvic Floor Muscle Injury using Quantitative Ultrasound Analysis',
    authors:
      'Qureshi, A., Chitnis, P., Alshiek, J., Shobeiri, S. A., and Wei, Q.',
    journal: 'In Progress',
    year: '2024',
    status: 'in-progress',
  },
  {
    id: 6,
    title:
      'Analyzing Ultrasound Images of the Median Nerve Using a Deep Learning Algorithm',
    authors:
      'Tse, K., Qureshi, A., Wei, Q., Slikdar, S., Serlin, Y., Akalu, A., Alter, K., Wu, T., and Lehky, T.',
    journal: 'In Progress',
    year: '2024',
    status: 'in-progress',
  },

  // Conference Proceedings
  {
    id: 7,
    title:
      'Automated Segmentation of the Eye Socket from Magnetic Resonance Images',
    authors:
      'Qureshi, A., Akram, W., Suh, S. Y., Chitnis, P., Demer, J. L., and Wei, Q.',
    journal: 'IBCAST 2024',
    year: '2024',
    status: 'conference',
  },
  {
    id: 8,
    title: 'A Linear Slide Platform for 3D Ocular Ultrasound Imaging',
    authors:
      'Qureshi, A., Ryan, A., Huang, Y., Yao, N., Demer, J. L., and Wei, Q.',
    journal: 'ARVO 2024',
    year: '2024',
    volume: '65',
    pages: '5558',
    status: 'conference',
  },
  {
    id: 9,
    title:
      'Analyzing Ultrasound Images of the Median Nerve with Deep Learning (P1-11.002)',
    authors:
      'Tse, K., Qureshi, A., Wei, Q., Slikdar, S., Akalu, A., Alter, K., and Lehky, T.',
    journal: 'AANEM 2024',
    year: '2024',
    volume: '102',
    pages: '2584',
    doi: '10.1212/WNL.0000000000204615',
    status: 'conference',
  },
  {
    id: 10,
    title:
      'Deep Learning based Automatic Segmentation of the Levator Ani Muscle from 3D Endovaginal Images',
    authors:
      'Qureshi, A., Rabbat, N., Hsu, K.-T., Asif, Z., Chitnis, P., Shobeiri, A., and Wei, Q.',
    journal: 'MIDL 2024',
    year: '2024',
    status: 'conference',
  },

  // Abstracts
  {
    id: 11,
    title:
      'Assessment of Pelvic Floor Muscle Injury using Quantitative Ultrasound Analysis',
    authors:
      'Qureshi, A., Chitnis, P., Alshiek, J., Shobeiri, S. A., and Wei, Q.',
    journal: 'BMES 2024',
    year: '2024',
    status: 'abstract',
  },
  {
    id: 12,
    title:
      'Correlation of Elastography and Ultrasound in Patients Undergoing Vaginal Birth',
    authors:
      'Wei, Q., Alcoba, E., Qureshi, A., Berg, L. E., Alshiek, J. A., Baumfeld, Y., and Shobeiri, S. A.',
    journal: 'AUGS 2024',
    year: '2024',
    status: 'abstract',
  },
  {
    id: 13,
    title:
      'Pelvic floor elasticity in patients with and without levator ani injury: an interim analysis of PFR study',
    authors:
      'Wei, Q., Alcoba, E., Qureshi, A., Berg, L. E., Baumfeld, Y., and Shobeiri, S. A.',
    journal: 'IUGA 2024',
    year: '2024',
    status: 'abstract',
  },
  {
    id: 14,
    title:
      'Fetal Parameters Indicators of Maternal Pelvic Floor Injury During Vaginal Birth',
    authors:
      'Wei, Q., Qureshi, A., Alcoba, E., Baumfeld, L. E. B. Y., and Shobeiri, S. A.',
    journal: 'AUGS 2024',
    year: '2024',
    status: 'abstract',
  },
  {
    id: 15,
    title:
      'Is pelvic floor function and strength impacted by levator ani injury: an interim analysis of PFR study',
    authors:
      'Wei, Q., Qureshi, A., Alcoba, E., Berg, L. E., Alshiek, J. A., Baumfeld, Y., and Shobeiri, S. A.',
    journal: 'IUGA 2024',
    year: '2024',
    status: 'abstract',
  },
  {
    id: 16,
    title:
      'A Simple Universal Biomechanics Monitoring System for Patients with Neuromusculoskeletal Conditions',
    authors: 'Qureshi, A., Haymond-Still, A., and Liotta, L. A.',
    journal: 'GMU Journal',
    year: '2021',
    url: 'https://journals.gmu.edu/index.php/jssr/article/view/3193',
    status: 'abstract',
  },
  {
    id: 17,
    title:
      'A Gait Retraining Assistant through an Ankle Sleeve Mobile Companion Application Uniquely Designed for Knee Osteoarthritis Patients',
    authors:
      'Qureshi, A., Howard, W., Haymond, A., Luchini, A., Cortes, N., and Liotta, L. A.',
    journal: 'GMU Journal',
    year: '2020',
    url: 'https://journal.gmu.edu/index.php/jssr/article/view/3145',
    status: 'abstract',
  },
];

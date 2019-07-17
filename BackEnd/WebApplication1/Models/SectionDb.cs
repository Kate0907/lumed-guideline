using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Guideline.Models
{
    public static class SectionDb
    {
        public static List<Section> SECTIONS { get; set; } = new List<Section>
        {
            new Section { id = 0, title = "Key Messages", mainIds =new List<int> {},  messageIds = new List<int> {100,101,2,3} },
            new Section { id = 1, title = "Type of Reaction to Penicillin",mainIds = new List<int>{6,7,8,9,10}, messageIds = new List<int> {4}},
            new Section { id = 2, title = "Key Messages",mainIds =new List<int> {11,12,13,14}, messageIds = new List<int> {5,6}},
            new Section { id = 3, title = "Key Messages", mainIds = new List<int>{},messageIds = new List<int> {7}},
            new Section { id = 4, title = "Test",mainIds = null, messageIds = null},
            new Section { id = 5, title = "Management",mainIds = new List<int>{15}, messageIds = new List<int> {9}},
            new Section { id = 6, title = "Proceed With Administering", mainIds =new List<int> {16},messageIds = new List<int> {10} },
            new Section { id = 7, title = "Most likely organisms",mainIds =new List<int> {20,21,22},messageIds = new List<int> {4,5,8}},
            new Section { id = 8, title = "IV", mainIds = new List<int>{17,15},messageIds = new List<int> {}},
            new Section { id = 9, title = "Severe Penicillin Allergy",mainIds = new List<int>{17,15}, messageIds = new List<int> {2,9}},
            new Section { id = 10, title = "Oral Stepdown",mainIds =new List<int> {17,18,19}, messageIds = new List<int> {10}},
        };

        public static int LastId = 11;
    }
}
